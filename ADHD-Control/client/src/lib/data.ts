import { Reset } from './types';

export const resets: Reset[] = [
  {
    id: 'water-reset',
    title: 'Water Reset',
    description: 'Drink a full glass of water slowly, focusing on the sensation of coolness. This activates your parasympathetic nervous system.',
    instructions: `
      1. Find a glass and fill it with cool water
      2. Take a small sip and hold it in your mouth for 3 seconds
      3. Notice how it feels on your tongue
      4. Swallow slowly, and feel the coolness travel down
      5. Continue sipping slowly until you finish the glass
      6. Take 3 deep breaths before continuing your day
    `,
    icon: 'water',
    color: 'blue',
    type: 'micro',
  },
  {
    id: 'grounding',
    title: 'Grounding 5-4-3-2-1',
    description: 'Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, and 1 you taste to quickly anchor yourself in the present.',
    instructions: `
      1. Look around you and name 5 things you can see right now
      2. Find 4 things you can physically touch and feel their texture
      3. Listen carefully and identify 3 sounds you can hear
      4. Try to notice 2 different smells in your environment
      5. Focus on 1 taste in your mouth (or take a small sip of a drink)
      6. Take a deep breath and notice how much more present you feel
    `,
    icon: 'tree',
    color: 'sage',
    type: 'micro',
  },
  {
    id: 'hand-warming',
    title: 'Hand Warming',
    description: 'Rub your hands together vigorously for 15 seconds, then place your warmed palms over your closed eyes for half a minute.',
    instructions: `
      1. Sit comfortably and take a deep breath
      2. Rub your palms together vigorously for 15-20 seconds
      3. Feel the warmth building between your hands
      4. Gently close your eyes
      5. Place your warm palms over your closed eyes (without pressing)
      6. Hold for 30 seconds while breathing deeply
      7. Slowly remove your hands and open your eyes
    `,
    icon: 'hand-paper',
    color: 'pink',
    type: 'micro',
  },
  {
    id: 'box-breathing',
    title: 'Box Breathing',
    description: 'Breathe in for 4 counts, hold for 4, exhale for 4, hold for 4. Repeat 3 times to quickly reset your nervous system.',
    instructions: `
      1. Sit comfortably and relax your shoulders
      2. Inhale slowly through your nose for 4 counts
      3. Hold your breath for 4 counts
      4. Exhale slowly through your mouth for 4 counts
      5. Hold your empty lungs for 4 counts
      6. Repeat this pattern 3 more times
      7. Notice how your body feels calmer
    `,
    icon: 'wind',
    color: 'blue',
    type: 'micro',
  },
  {
    id: 'sixty-second-movement',
    title: '60-Second Movement',
    description: 'Stand up and move your body however feels good for just 60 seconds. Stretch, jump, dance, or shake it out.',
    instructions: `
      1. Stand up from where you're sitting
      2. Set a timer for 60 seconds
      3. Move your body in any way that feels good:
         - Stretch your arms overhead
         - Shake out your hands and feet
         - Do a few gentle jumps or dance moves
         - Twist gently from side to side
      4. Keep moving for the full minute
      5. Notice how different your body feels afterward
    `,
    icon: 'walking',
    color: 'sage',
    type: 'micro',
  },
  {
    id: 'sensory-shift',
    title: 'Sensory Shift',
    description: 'Change one sensory input dramatically - step outside for 30 seconds, splash cold water on your face, or listen to nature sounds.',
    instructions: `
      Choose one of these quick sensory shifts:
      
      Option 1: Temperature Change
      1. Go to a sink and run cold water
      2. Splash your face 3 times with the cold water
      3. Pat dry and notice how alert you feel
      
      Option 2: Sound Change
      1. Find a nature sound on your phone (rain, ocean, birds)
      2. Put on headphones and listen for 30 seconds
      3. Close your eyes and immerse yourself in the sound
      
      Option 3: Air Change
      1. Step outside (or open a window) for 30 seconds
      2. Take 5 deep breaths of fresh air
      3. Notice the temperature difference on your skin
    `,
    icon: 'cloud-sun',
    color: 'pink',
    type: 'micro',
  },
  {
    id: 'cold-shock',
    title: 'Cold Shock',
    description: 'Hold an ice cube in your palm or place a cold pack on the back of your neck for 15-30 seconds.',
    instructions: `
      Option 1: Ice Cube Method
      1. Get an ice cube from the freezer
      2. Hold it in your palm or rub it on your wrist
      3. Focus on the intense cold sensation for 15-30 seconds
      4. Notice how it immediately shifts your focus
      
      Option 2: Cold Water Method
      1. Run very cold water from a faucet
      2. Place your hands under the stream for 15 seconds
      3. Splash some cold water on the back of your neck
      4. Notice how quickly your body becomes alert
    `,
    icon: 'snowflake',
    color: 'blue',
    type: 'emergency',
  },
  {
    id: '4-7-8-breath',
    title: '4-7-8 Breath',
    description: 'Inhale for 4 counts, hold for 7, exhale for 8. Do just once for an immediate calming effect.',
    instructions: `
      1. Sit comfortably and place the tip of your tongue against the roof of your mouth, just behind your front teeth
      2. Exhale completely through your mouth, making a whoosh sound
      3. Close your mouth and inhale quietly through your nose for a count of 4
      4. Hold your breath for a count of 7
      5. Exhale completely through your mouth (whoosh) for a count of 8
      6. This completes one breath cycle
      7. Even doing just ONE cycle can begin to calm your nervous system
    `,
    icon: 'lungs',
    color: 'sage',
    type: 'emergency',
  },
  {
    id: 'deep-pressure',
    title: 'Deep Pressure',
    description: 'Give yourself a tight hug, press your palms together firmly, or squeeze a stress ball as hard as you can.',
    instructions: `
      Choose one of these pressure techniques:
      
      Option 1: Self-Hug
      1. Cross your arms over your chest
      2. Place your hands on your shoulders or upper arms
      3. Give yourself a firm, tight hug
      4. Hold for 30 seconds while breathing deeply
      
      Option 2: Hand Pressure
      1. Press your palms together firmly in front of your chest
      2. Apply significant pressure for 15-20 seconds
      3. Release and notice the sensation in your hands and arms
      
      Option 3: Object Squeeze
      1. Find a stress ball, pillow, or rolled-up towel
      2. Squeeze it as hard as you can for 5 seconds
      3. Release for 5 seconds
      4. Repeat 3 times
    `,
    icon: 'compress-arrows-alt',
    color: 'pink',
    type: 'emergency',
  },
  {
    id: 'sound-shift',
    title: 'Sound Shift',
    description: 'Put on a favorite song for 30 seconds, or step outside and focus only on environmental sounds.',
    instructions: `
      Option 1: Music Reset
      1. Choose a song that either energizes or calms you
      2. Put on headphones if possible
      3. Listen for just 30-60 seconds with full attention
      4. Focus only on the music, not on any other tasks
      5. Notice how your emotional state shifts
      
      Option 2: Environmental Sound Focus
      1. Wherever you are, stop and close your eyes
      2. Focus only on the sounds around you
      3. Try to identify at least 5 different sounds
      4. Notice how far away each sound is
      5. Spend 30 seconds just listening
    `,
    icon: 'music',
    color: 'blue',
    type: 'emergency',
  },
  {
    id: 'instant-grounding',
    title: 'Instant Grounding',
    description: 'Name 5 blue objects you can see right now. This immediately pulls you into the present moment.',
    instructions: `
      1. Stop whatever you're doing
      2. Look around your environment
      3. Find and name out loud 5 blue objects
         (If blue is hard to find, choose another color)
      4. For each object, say:
         "I see a blue [object]"
      5. Notice how this immediately pulls your attention to the present
      6. Take a deep breath when you finish
      
      This works with any color - the key is to search for specific objects in your environment right now.
    `,
    icon: 'mountain',
    color: 'sage',
    type: 'emergency',
  }
];

export const getMicroResets = () => resets.filter(reset => reset.type === 'micro');
export const getEmergencyResets = () => resets.filter(reset => reset.type === 'emergency');
