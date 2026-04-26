import 'package:flutter/material.dart';
import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:amplify_auth_cognito/amplify_auth_cognito.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _emailController = TextEditingController(text: 'admin@hydrotek.farm');
  final _passwordController = TextEditingController(text: 'password123');
  bool _isPasswordVisible = false;

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return Scaffold(
      backgroundColor: colorScheme.surface,
      body: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 32.0, vertical: 48.0),
          child: Container(
            constraints: const BoxConstraints(maxWidth: 390),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                // Logo Section
                Column(
                  children: [
                    Container(
                      width: 64,
                      height: 64,
                      decoration: BoxDecoration(
                        color: colorScheme.primaryContainer.withOpacity(0.2),
                        borderRadius: BorderRadius.circular(16),
                      ),
                      child: Icon(
                        Icons.eco,
                        size: 36,
                        color: colorScheme.primary,
                      ),
                    ),
                    const SizedBox(height: 24),
                    Text(
                      'Hydrotek Farm',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 32,
                        fontWeight: FontWeight.w900,
                        color: colorScheme.onSurface,
                        letterSpacing: -1,
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      'Precision growth for the modern era',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.w500,
                        color: colorScheme.onSurfaceVariant,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 48),
                
                // Login Form Group
                _buildTextField(
                  controller: _emailController,
                  label: 'Username or Email',
                  hint: 'name@farm.com',
                  colorScheme: colorScheme,
                ),
                const SizedBox(height: 16),
                _buildTextField(
                  controller: _passwordController,
                  label: 'Password',
                  hint: '••••••••',
                  isPassword: true,
                  colorScheme: colorScheme,
                ),
                const SizedBox(height: 8),
                Align(
                  alignment: Alignment.centerRight,
                  child: TextButton(
                    onPressed: () {},
                    style: TextButton.styleFrom(
                      padding: EdgeInsets.zero,
                      minimumSize: const Size(0, 0),
                      tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                    ),
                    child: Text(
                      'Forgot password?',
                      style: TextStyle(color: colorScheme.onSurfaceVariant, fontSize: 14, fontWeight: FontWeight.w600),
                    ),
                  ),
                ),
                const SizedBox(height: 28),
                
                // Primary Action
                Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(12),
                    gradient: LinearGradient(
                      colors: [colorScheme.primary, colorScheme.primaryContainer],
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
                    boxShadow: [
                      BoxShadow(
                        color: colorScheme.primary.withOpacity(0.2),
                        blurRadius: 12,
                        offset: const Offset(0, 4),
                      )
                    ],
                  ),
                  child: ElevatedButton(
                    onPressed: () async {
                      try {
                        final result = await Amplify.Auth.signIn(
                          username: _emailController.text,
                          password: _passwordController.text,
                        );
                        if (result.isSignedIn) {
                          if (context.mounted) {
                            Navigator.pushReplacementNamed(context, '/dashboard');
                          }
                        } else if (result.nextStep.signInStep == AuthSignInStep.confirmSignInWithNewPassword) {
                          if (context.mounted) {
                            final newPasswordController = TextEditingController();
                            showDialog(
                              context: context,
                              builder: (context) => AlertDialog(
                                backgroundColor: Theme.of(context).colorScheme.surface,
                                title: const Text('New Password Required'),
                                content: Column(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    const Text('Since you were created in the console, you must set a new password on your first login.'),
                                    const SizedBox(height: 16),
                                    TextField(
                                      controller: newPasswordController,
                                      obscureText: true,
                                      decoration: InputDecoration(
                                        labelText: 'New Password',
                                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(8)),
                                      ),
                                    ),
                                  ],
                                ),
                                actions: [
                                  TextButton(
                                    onPressed: () => Navigator.pop(context),
                                    child: const Text('Cancel'),
                                  ),
                                  ElevatedButton(
                                    onPressed: () async {
                                      try {
                                        final confirmResult = await Amplify.Auth.confirmSignIn(
                                          confirmationValue: newPasswordController.text,
                                        );
                                        if (confirmResult.isSignedIn && context.mounted) {
                                          Navigator.pop(context); // Close dialog
                                          Navigator.pushReplacementNamed(context, '/dashboard');
                                        }
                                      } catch (e) {
                                        safePrint('Error confirming password: $e');
                                      }
                                    },
                                    child: const Text('Confirm'),
                                  ),
                                ],
                              ),
                            );
                          }
                        } else {
                          safePrint('User is not fully signed in. Step: ${result.nextStep.signInStep}');
                          if (context.mounted) {
                            ScaffoldMessenger.of(context).showSnackBar(
                              SnackBar(content: Text('Additional step required: ${result.nextStep.signInStep}')),
                            );
                          }
                        }
                      } on AuthException catch (e) {
                        safePrint('Error signing in: ${e.message}');
                        if (context.mounted) {
                          ScaffoldMessenger.of(context).showSnackBar(
                            SnackBar(content: Text('Sign in failed: ${e.message}')),
                          );
                        }
                      }
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.transparent,
                      shadowColor: Colors.transparent,
                      padding: const EdgeInsets.symmetric(vertical: 16),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                    ),
                    child: const Text(
                      'Login',
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 40),
                
                // Divider
                Row(
                  children: [
                    Expanded(child: Divider(color: colorScheme.outlineVariant.withOpacity(0.3))),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 16),
                      child: Text(
                        'OR CONTINUE WITH',
                        style: TextStyle(
                          fontSize: 10,
                          fontWeight: FontWeight.bold,
                          color: colorScheme.onSurfaceVariant,
                          letterSpacing: 1.5,
                        ),
                      ),
                    ),
                    Expanded(child: Divider(color: colorScheme.outlineVariant.withOpacity(0.3))),
                  ],
                ),
                const SizedBox(height: 32),
                
                // Social/SSO Group
                OutlinedButton.icon(
                  onPressed: () async {
                    try {
                      final result = await Amplify.Auth.signInWithWebUI(
                        provider: AuthProvider.google,
                      );
                      if (result.isSignedIn && context.mounted) {
                        Navigator.pushReplacementNamed(context, '/dashboard');
                      }
                    } on AuthException catch (e) {
                      safePrint('Error signing in with Google: ${e.message}');
                      if (context.mounted) {
                        ScaffoldMessenger.of(context).showSnackBar(
                          SnackBar(content: Text('Sign in failed: ${e.message}')),
                        );
                      }
                    }
                  },
                  icon: const Icon(Icons.g_mobiledata, size: 28),
                  label: const Text('Google'),
                  style: OutlinedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(vertical: 16),
                    backgroundColor: Colors.white,
                    foregroundColor: colorScheme.onSurface,
                    side: BorderSide(color: colorScheme.outlineVariant.withOpacity(0.3)),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                    textStyle: const TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
                  ),
                ),
                const SizedBox(height: 16),
                ElevatedButton.icon(
                  onPressed: () {},
                  icon: Icon(Icons.vpn_key, size: 20, color: colorScheme.onInverseSurface),
                  label: Text('Sign in with SSO', style: TextStyle(color: colorScheme.onInverseSurface)),
                  style: ElevatedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(vertical: 16),
                    backgroundColor: colorScheme.inverseSurface,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                    textStyle: const TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
                  ),
                ),
                const SizedBox(height: 48),
                
                // Footer
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text('New user? ', style: TextStyle(color: colorScheme.onSurfaceVariant, fontSize: 14, fontWeight: FontWeight.w500)),
                    Text('Register', style: TextStyle(color: colorScheme.secondary, fontSize: 14, fontWeight: FontWeight.bold)),
                  ],
                ),
                const SizedBox(height: 16),
                Center(
                  child: Container(
                    width: 128,
                    height: 4,
                    decoration: BoxDecoration(
                      color: colorScheme.onSurface.withOpacity(0.1),
                      borderRadius: BorderRadius.circular(2),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildTextField({
    required TextEditingController controller,
    required String label,
    required String hint,
    bool isPassword = false,
    required ColorScheme colorScheme,
  }) {
    // If surfaceContainerHigh is not available on the scheme we fallback
    // We can just use the hex color from the design system
    final fillColor = const Color(0xFFE5E9E5);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(left: 4, bottom: 8),
          child: Text(
            label.toUpperCase(),
            style: TextStyle(
              fontSize: 11,
              fontWeight: FontWeight.bold,
              color: colorScheme.primary,
              letterSpacing: 1.5,
            ),
          ),
        ),
        TextFormField(
          controller: controller,
          obscureText: isPassword && !_isPasswordVisible,
          decoration: InputDecoration(
            hintText: hint,
            hintStyle: TextStyle(color: colorScheme.onSurfaceVariant.withOpacity(0.5)),
            filled: true,
            fillColor: fillColor,
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(12),
              borderSide: BorderSide.none,
            ),
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(12),
              borderSide: BorderSide.none,
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(12),
              borderSide: BorderSide(color: colorScheme.primary.withOpacity(0.4), width: 2),
            ),
            contentPadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
            suffixIcon: isPassword
                ? IconButton(
                    icon: Icon(
                      _isPasswordVisible ? Icons.visibility : Icons.visibility_off,
                      color: colorScheme.onSurfaceVariant,
                      size: 20,
                    ),
                    onPressed: () {
                      setState(() {
                        _isPasswordVisible = !_isPasswordVisible;
                      });
                    },
                  )
                : null,
          ),
        ),
      ],
    );
  }
}
