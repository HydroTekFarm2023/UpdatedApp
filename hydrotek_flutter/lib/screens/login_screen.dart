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
    final isDark = colorScheme.brightness == Brightness.dark;

    return Scaffold(
      backgroundColor: colorScheme.surface,
      body: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 28.0, vertical: 48.0),
          child: Container(
            constraints: const BoxConstraints(maxWidth: 420),
            padding: const EdgeInsets.all(32.0),
            decoration: BoxDecoration(
              color: isDark ? colorScheme.surface : Colors.white,
              borderRadius: BorderRadius.circular(16),
              boxShadow: isDark ? [] : const [
                BoxShadow(
                  color: Color(0x0F166C44),
                  blurRadius: 30,
                  offset: Offset(0, 10),
                )
              ],
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Icon(
                  Icons.water_drop,
                  size: 64,
                  color: colorScheme.primary,
                ),
                const SizedBox(height: 24),
                Text(
                  'Hydrotek Farm',
                  textAlign: TextAlign.center,
                  style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                    fontWeight: FontWeight.bold,
                    color: colorScheme.onSurface,
                    letterSpacing: -0.5,
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  'Precision growth for the modern era',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 16,
                    color: colorScheme.onSurfaceVariant,
                  ),
                ),
                const SizedBox(height: 48),
                _buildTextField(
                  controller: _emailController,
                  label: 'Email Address',
                  icon: Icons.email_outlined,
                  colorScheme: colorScheme,
                ),
                const SizedBox(height: 20),
                _buildTextField(
                  controller: _passwordController,
                  label: 'Password',
                  icon: Icons.lock_outline,
                  isPassword: true,
                  colorScheme: colorScheme,
                ),
                const SizedBox(height: 12),
                Align(
                  alignment: Alignment.centerRight,
                  child: TextButton(
                    onPressed: () {},
                    child: Text(
                      'Forgot password?',
                      style: TextStyle(color: colorScheme.primary, fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
                const SizedBox(height: 32),
                Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(12),
                    gradient: LinearGradient(
                      colors: [colorScheme.primary, colorScheme.primaryContainer],
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
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
                      padding: const EdgeInsets.symmetric(vertical: 18),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                    ),
                    child: const Text(
                      'Sign In',
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 16),
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
                  label: const Text('Sign in with Google'),
                  style: OutlinedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                ),
                const SizedBox(height: 24),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text('New user? ', style: TextStyle(color: colorScheme.onSurfaceVariant)),
                    Text('Register', style: TextStyle(color: colorScheme.primary, fontWeight: FontWeight.bold)),
                  ],
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
    required IconData icon,
    bool isPassword = false,
    required ColorScheme colorScheme,
  }) {
    return TextFormField(
      controller: controller,
      obscureText: isPassword && !_isPasswordVisible,
      decoration: InputDecoration(
        labelText: label,
        labelStyle: TextStyle(color: colorScheme.onSurfaceVariant),
        filled: true,
        fillColor: colorScheme.surfaceContainerHighest,
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
        prefixIcon: Icon(icon, color: colorScheme.primary),
        suffixIcon: isPassword
            ? IconButton(
                icon: Icon(
                  _isPasswordVisible ? Icons.visibility : Icons.visibility_off,
                  color: colorScheme.onSurfaceVariant,
                ),
                onPressed: () {
                  setState(() {
                    _isPasswordVisible = !_isPasswordVisible;
                  });
                },
              )
            : null,
      ),
    );
  }
}
