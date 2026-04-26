import 'package:flutter/material.dart';
import '../screens/dashboard_screen.dart';
import '../screens/control_screen.dart';
import '../screens/analytics_screen.dart';
import '../screens/camera_screen.dart';

class AppLayout extends StatefulWidget {
  final int initialIndex;

  const AppLayout({super.key, this.initialIndex = 0});

  @override
  State<AppLayout> createState() => _AppLayoutState();
}

class _AppLayoutState extends State<AppLayout> {
  late int _currentIndex;

  final List<Widget> _screens = const [
    DashboardScreen(),
    ControlScreen(),
    AnalyticsScreen(),
    CameraScreen(),
  ];

  @override
  void initState() {
    super.initState();
    _currentIndex = widget.initialIndex;
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    
    return Scaffold(
      backgroundColor: theme.colorScheme.surface,
      appBar: AppBar(
        backgroundColor: theme.colorScheme.surface.withOpacity(0.9),
        elevation: 0,
        scrolledUnderElevation: 0,
        title: Row(
          children: [
            Container(
              width: 32,
              height: 32,
              decoration: BoxDecoration(
                color: theme.colorScheme.primaryContainer,
                shape: BoxShape.circle,
              ),
              child: Icon(Icons.eco, color: theme.colorScheme.primary, size: 20),
            ),
            const SizedBox(width: 12),
            Text(
              'Hydrotek Farm',
              style: TextStyle(
                color: theme.colorScheme.primary,
                fontWeight: FontWeight.w900,
                fontSize: 18,
                letterSpacing: -0.5,
              ),
            ),
          ],
        ),
        actions: [
          Center(
            child: Padding(
              padding: const EdgeInsets.only(right: 16.0),
              child: Text(
                'SYSTEM ONLINE',
                style: TextStyle(
                  color: theme.colorScheme.onSurfaceVariant,
                  fontSize: 10,
                  fontWeight: FontWeight.bold,
                  letterSpacing: 1.5,
                ),
              ),
            ),
          ),
          IconButton(
            icon: const Icon(Icons.account_circle),
            color: theme.colorScheme.primary,
            onPressed: () {},
          ),
          const SizedBox(width: 8),
        ],
      ),
      body: SafeArea(
        child: IndexedStack(
          index: _currentIndex,
          children: _screens,
        ),
      ),
      bottomNavigationBar: Theme(
        data: theme.copyWith(
          splashColor: Colors.transparent,
          highlightColor: Colors.transparent,
        ),
        child: NavigationBar(
          selectedIndex: _currentIndex,
          onDestinationSelected: (index) {
            setState(() {
              _currentIndex = index;
            });
          },
          backgroundColor: theme.colorScheme.surface,
          elevation: 10,
          indicatorColor: theme.colorScheme.primaryContainer,
          destinations: const [
            NavigationDestination(
              icon: Icon(Icons.sensors_outlined),
              selectedIcon: Icon(Icons.sensors),
              label: 'Monitoring',
            ),
            NavigationDestination(
              icon: Icon(Icons.tune_outlined),
              selectedIcon: Icon(Icons.tune),
              label: 'Control',
            ),
            NavigationDestination(
              icon: Icon(Icons.leaderboard_outlined),
              selectedIcon: Icon(Icons.leaderboard),
              label: 'Analytics',
            ),
            NavigationDestination(
              icon: Icon(Icons.videocam_outlined),
              selectedIcon: Icon(Icons.videocam),
              label: 'Camera',
            ),
          ],
        ),
      ),
    );
  }
}
