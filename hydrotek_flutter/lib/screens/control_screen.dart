import 'package:flutter/material.dart';

class ControlScreen extends StatefulWidget {
  const ControlScreen({super.key});

  @override
  State<ControlScreen> createState() => _ControlScreenState();
}

class _ControlScreenState extends State<ControlScreen> {
  bool _waterPumps = true;
  bool _growLights = true;
  bool _ventilation = false;
  bool _nutrientDosing = true;
  double _targetTemp = 22.5;

  @override
  Widget build(BuildContext context) {
     final colorScheme = Theme.of(context).colorScheme;

    return Scaffold(
      backgroundColor: colorScheme.surface,
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.all(28.0),
          children: [
            Text('Actuator Control', style: Theme.of(context).textTheme.headlineMedium?.copyWith(fontWeight: FontWeight.bold, color: colorScheme.onSurface)),
            const SizedBox(height: 8),
            Text('Manage greenhouse systems and targets.', style: TextStyle(color: colorScheme.onSurfaceVariant, fontSize: 16)),
            const SizedBox(height: 32),

            _buildSwitchCard(
              title: 'Water Pumps',
              subtitle: 'Operating normally',
              value: _waterPumps,
              onChanged: (val) => setState(() => _waterPumps = val),
              icon: Icons.water_drop,
              color: colorScheme.secondary,
              progress: 0.85,
            ),
            _buildSwitchCard(
              title: 'Grow Lights (Spectrum A)',
              subtitle: 'Scheduled to turn off at 20:00',
              value: _growLights,
              onChanged: (val) => setState(() => _growLights = val),
              icon: Icons.lightbulb,
              color: colorScheme.primary, // using primary for main lights
              progress: 1.0,
            ),
             _buildSwitchCard(
              title: 'Ventilation Fans',
              subtitle: 'Currently idle',
              value: _ventilation,
              onChanged: (val) => setState(() => _ventilation = val),
              icon: Icons.air,
              color: Colors.blueGrey,
              progress: 0.0,
            ),
             _buildSwitchCard(
              title: 'Nutrient Dosing Pump',
              subtitle: 'Last dose: 2 hrs ago',
              value: _nutrientDosing,
              onChanged: (val) => setState(() => _nutrientDosing = val),
              icon: Icons.science,
              color: colorScheme.tertiary,
              progress: 0.5,
            ),

            const SizedBox(height: 32),
            Text('Climate Target', style: Theme.of(context).textTheme.titleLarge?.copyWith(fontWeight: FontWeight.bold)),
            const SizedBox(height: 24),
            _buildSliderCard(colorScheme),
          ],
        ),
      ),
    );
  }

  Widget _buildSwitchCard({
    required String title,
    required String subtitle,
    required bool value,
    required ValueChanged<bool> onChanged,
    required IconData icon,
    required Color color,
    double progress = 1.0,
  }) {
    final colorScheme = Theme.of(context).colorScheme;
    final isDark = colorScheme.brightness == Brightness.dark;

     return Container(
        margin: const EdgeInsets.only(bottom: 16),
        padding: const EdgeInsets.all(24),
         decoration: BoxDecoration(
          color: isDark ? colorScheme.surfaceContainerHighest : Colors.white,
          borderRadius: BorderRadius.circular(16),
           border: isDark ? null : Border.all(color: colorScheme.outlineVariant.withOpacity(0.2), width: 1),
        ),
        child: Column(
          children: [
            Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: value ? color.withOpacity(0.15) : colorScheme.surfaceContainerHighest,
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Icon(icon, color: value ? color : colorScheme.onSurfaceVariant),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(title, style: TextStyle(color: colorScheme.onSurface, fontWeight: FontWeight.bold, fontSize: 16)),
                      const SizedBox(height: 4),
                      Text(subtitle, style: TextStyle(color: colorScheme.onSurfaceVariant, fontSize: 13)),
                    ],
                  ),
                ),
                Switch(
                  value: value,
                  onChanged: onChanged,
                  activeColor: color,
                  activeTrackColor: color.withOpacity(0.3),
                )
              ],
            ),
            if (value) ...[
              const SizedBox(height: 20),
              Row(
                children: [
                  Text('Intensity', style: TextStyle(fontSize: 12, color: colorScheme.onSurfaceVariant, fontWeight: FontWeight.w600)),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Container(
                      height: 8,
                      decoration: BoxDecoration(
                        color: isDark ? colorScheme.surface : colorScheme.surfaceContainerLow,
                        borderRadius: BorderRadius.circular(4),
                      ),
                      child: FractionallySizedBox(
                        alignment: Alignment.centerLeft,
                        widthFactor: progress,
                        child: Container(
                          decoration: BoxDecoration(
                            color: color,
                            borderRadius: BorderRadius.circular(4),
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Text('${(progress * 100).toInt()}%', style: TextStyle(fontSize: 12, color: color, fontWeight: FontWeight.bold)),
                ],
              )
            ]
          ],
        )
      );
  }

  Widget _buildSliderCard(ColorScheme colorScheme) {
    final isDark = colorScheme.brightness == Brightness.dark;

     return Container(
        padding: const EdgeInsets.all(28),
         decoration: BoxDecoration(
          color: isDark ? colorScheme.surfaceContainerHighest : Colors.white,
          borderRadius: BorderRadius.circular(16),
           border: isDark ? null : Border.all(color: colorScheme.outlineVariant.withOpacity(0.2), width: 1),
        ),
        child: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                 Text('Target Temperature', style: TextStyle(color: colorScheme.onSurfaceVariant, fontWeight: FontWeight.w500)),
                 Text('${_targetTemp.toStringAsFixed(1)} °C', style: TextStyle(color: colorScheme.primary, fontWeight: FontWeight.bold, fontSize: 20)),
              ],
            ),
            const SizedBox(height: 16),
            SliderTheme(
              data: SliderTheme.of(context).copyWith(
                activeTrackColor: colorScheme.primaryContainer,
                inactiveTrackColor: colorScheme.surfaceContainerHigh,
                thumbColor: colorScheme.primary,
                overlayColor: colorScheme.primary.withOpacity(0.1),
              ),
              child: Slider(
                value: _targetTemp,
                min: 15.0,
                max: 30.0,
                divisions: 30,
                onChanged: (val) {
                  setState(() {
                    _targetTemp = val;
                  });
                },
              ),
            ),
          ]
        )
     );
  }
}
