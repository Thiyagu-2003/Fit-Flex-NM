import { WorkoutPlan } from '../types/user';

export const exercises = {
  chest: {
    beginner: [
      {
        name: "Push-ups",
        equipment: "Bodyweight",
        sets: 3,
        reps: "10-12",
        instructions: [
          "Start in plank position with hands shoulder-width apart",
          "Lower chest to ground while keeping body straight",
          "Push back up to starting position",
          "Keep core tight throughout movement"
        ],
        muscles: ["Chest", "Shoulders", "Triceps"],
        gifUrl: "https://media.giphy.com/media/7YCC3rjPxX5sY/giphy.gif",
        difficulty: "beginner",
        calories: 150,
        safetyTips: [
          "Keep your neck in a neutral position",
          "Don't let your hips sag or pike up",
          "Engage your core throughout the movement",
          "Breathe out as you push up"
        ],
        commonMistakes: [
          "Flaring elbows too wide",
          "Not going through full range of motion",
          "Holding breath during the exercise",
          "Letting hips sag or pike up"
        ],
        variations: [
          "Knee Push-ups",
          "Wide Push-ups",
          "Diamond Push-ups",
          "Decline Push-ups"
        ]
      },
      {
        name: "Incline Dumbbell Press",
        equipment: "Dumbbells, Bench",
        sets: 3,
        reps: "12-15",
        instructions: [
          "Lie on incline bench at 30-45 degree angle",
          "Hold dumbbells at chest level",
          "Press weights up until arms are extended",
          "Lower weights back to starting position"
        ],
        muscles: ["Upper Chest", "Front Deltoids", "Triceps"],
        gifUrl: "https://media.giphy.com/media/l3UcjPVTaCVPyy6fC/giphy.gif",
        difficulty: "beginner",
        calories: 180,
        safetyTips: [
          "Keep your back firmly against the bench",
          "Don't arch your lower back excessively",
          "Control the weights throughout the movement",
          "Use a spotter for heavier weights"
        ],
        commonMistakes: [
          "Using momentum to lift the weights",
          "Bouncing the weights off the chest",
          "Flaring the elbows too much",
          "Not maintaining proper bench angle"
        ],
        variations: [
          "Flat Dumbbell Press",
          "Decline Dumbbell Press",
          "Alternating Dumbbell Press",
          "Single-arm Dumbbell Press"
        ]
      }
    ],
    intermediate: [
      {
        name: "Dumbbell Bench Press",
        equipment: "Dumbbells, Flat Bench",
        sets: 4,
        reps: "8-12",
        instructions: [
          "Lie flat on bench with feet planted",
          "Hold dumbbells at chest level",
          "Press weights up in smooth motion",
          "Keep shoulders retracted"
        ],
        muscles: ["Chest", "Front Deltoids", "Triceps"],
        gifUrl: "https://media.giphy.com/media/3o7TKRwpns23QMNNiE/giphy.gif",
        difficulty: "intermediate",
        calories: 200,
        safetyTips: [
          "Keep your feet firmly planted on the ground",
          "Maintain a slight arch in your lower back",
          "Don't lock out your elbows at the top",
          "Control the weights during the entire movement"
        ],
        commonMistakes: [
          "Bouncing the weights off the chest",
          "Using too much weight",
          "Not keeping wrists straight",
          "Lifting hips off the bench"
        ],
        variations: [
          "Alternating Dumbbell Press",
          "Neutral Grip Dumbbell Press",
          "Single-arm Dumbbell Press",
          "Dumbbell Floor Press"
        ]
      }
    ],
    advanced: [
      {
        name: "Weighted Dips",
        equipment: "Dip Bars, Weight Belt",
        sets: 4,
        reps: "6-8",
        instructions: [
          "Attach weight to dip belt",
          "Support body on dip bars",
          "Lower body until upper arms are parallel to ground",
          "Push back up to starting position"
        ],
        muscles: ["Lower Chest", "Triceps", "Front Deltoids"],
        gifUrl: "https://media.giphy.com/media/xT9DPDYXQt3dQvTSKs/giphy.gif",
        difficulty: "advanced",
        calories: 220,
        safetyTips: [
          "Warm up thoroughly before adding weight",
          "Keep your shoulders down and back",
          "Don't descend too deep if you feel shoulder pain",
          "Control the movement throughout"
        ],
        commonMistakes: [
          "Leaning too far forward or backward",
          "Using momentum to complete reps",
          "Not going deep enough",
          "Adding too much weight too quickly"
        ],
        variations: [
          "Chest-focused Dips (leaning forward)",
          "Tricep-focused Dips (upright torso)",
          "Ring Dips",
          "Plyometric Dips"
        ]
      }
    ]
  },
  back: {
    beginner: [
      {
        name: "Assisted Pull-ups",
        equipment: "Pull-up Bar, Resistance Band",
        sets: 3,
        reps: "8-10",
        instructions: [
          "Loop resistance band around pull-up bar",
          "Grip bar slightly wider than shoulder width",
          "Pull chest to bar while squeezing shoulder blades",
          "Lower with control"
        ],
        muscles: ["Latissimus Dorsi", "Rhomboids", "Biceps"],
        gifUrl: "https://media.giphy.com/media/3o7TKRwpns23QMNNiE/giphy.gif",
        difficulty: "beginner",
        calories: 160,
        safetyTips: [
          "Choose appropriate band resistance",
          "Keep your core engaged throughout",
          "Don't swing or use momentum",
          "Maintain control during the lowering phase"
        ],
        commonMistakes: [
          "Not pulling all the way up",
          "Using too much arm strength instead of back",
          "Shrugging shoulders during the pull",
          "Relying too heavily on the band"
        ],
        variations: [
          "Negative Pull-ups",
          "Band-assisted Chin-ups",
          "Jumping Pull-ups",
          "Scapular Pull-ups"
        ]
      }
    ],
    intermediate: [
      {
        name: "Barbell Rows",
        equipment: "Barbell",
        sets: 4,
        reps: "10-12",
        instructions: [
          "Bend at hips with slight knee bend",
          "Grip barbell with hands shoulder-width apart",
          "Pull bar to lower chest",
          "Keep back straight throughout movement"
        ],
        muscles: ["Upper Back", "Lats", "Rear Deltoids"],
        gifUrl: "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
        difficulty: "intermediate",
        calories: 190,
        safetyTips: [
          "Maintain a neutral spine throughout",
          "Hinge at the hips, not the waist",
          "Keep the bar close to your body",
          "Engage your core to protect your lower back"
        ],
        commonMistakes: [
          "Rounding the back",
          "Using momentum to lift the weight",
          "Not pulling the bar high enough",
          "Jerking the weight instead of controlled movement"
        ],
        variations: [
          "Pendlay Rows",
          "Underhand Barbell Rows",
          "T-Bar Rows",
          "Meadows Rows"
        ]
      }
    ],
    advanced: [
      {
        name: "Weighted Pull-ups",
        equipment: "Pull-up Bar, Weight Belt",
        sets: 4,
        reps: "6-8",
        instructions: [
          "Attach weight to dip belt",
          "Grip bar wider than shoulder width",
          "Pull chin over bar",
          "Lower with control"
        ],
        muscles: ["Lats", "Upper Back", "Biceps"],
        gifUrl: "https://media.giphy.com/media/3oKIPavRPgJYaNI97W/giphy.gif",
        difficulty: "advanced",
        calories: 210,
        safetyTips: [
          "Start with lighter weights and progress gradually",
          "Maintain proper form throughout",
          "Control the descent to prevent injury",
          "Keep your core engaged to prevent swinging"
        ],
        commonMistakes: [
          "Using momentum or kipping",
          "Not completing full range of motion",
          "Adding too much weight too quickly",
          "Holding breath during the movement"
        ],
        variations: [
          "Weighted Chin-ups",
          "L-sit Pull-ups",
          "Commando Pull-ups",
          "Archer Pull-ups"
        ]
      }
    ]
  },
  shoulders: {
    beginner: [
      {
        name: "Dumbbell Lateral Raises",
        equipment: "Dumbbells",
        sets: 3,
        reps: "12-15",
        instructions: [
          "Stand with dumbbells at sides",
          "Raise arms out to sides until parallel with ground",
          "Keep slight bend in elbows",
          "Lower with control"
        ],
        muscles: ["Lateral Deltoids"],
        gifUrl: "https://media.giphy.com/media/dWkFUiZLS9jZH1kgGP/giphy.gif",
        difficulty: "beginner",
        calories: 140,
        safetyTips: [
          "Use light weights to maintain proper form",
          "Keep a slight bend in the elbows",
          "Don't shrug your shoulders during the movement",
          "Control the weights on the way down"
        ],
        commonMistakes: [
          "Using momentum to swing the weights up",
          "Raising the weights too high",
          "Shrugging the shoulders",
          "Locking the elbows"
        ],
        variations: [
          "Seated Lateral Raises",
          "Cable Lateral Raises",
          "One-arm Lateral Raises",
          "Leaning Lateral Raises"
        ]
      }
    ],
    intermediate: [
      {
        name: "Military Press",
        equipment: "Barbell",
        sets: 4,
        reps: "8-10",
        instructions: [
          "Hold barbell at shoulder level",
          "Press weight overhead",
          "Keep core tight",
          "Lower with control"
        ],
        muscles: ["Front Deltoids", "Lateral Deltoids", "Triceps"],
        gifUrl: "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
        difficulty: "intermediate",
        calories: 180,
        safetyTips: [
          "Keep your core engaged to protect your lower back",
          "Don't arch your back excessively",
          "Avoid locking out your elbows at the top",
          "Keep the bar path in line with your center of gravity"
        ],
        commonMistakes: [
          "Arching the lower back too much",
          "Leaning back to push the weight",
          "Not fully engaging the shoulders",
          "Using leg drive to push the weight up"
        ],
        variations: [
          "Seated Military Press",
          "Push Press",
          "Behind-the-Neck Press",
          "Single-arm Dumbbell Press"
        ]
      }
    ],
    advanced: [
      {
        name: "Handstand Push-ups",
        equipment: "Wall",
        sets: 3,
        reps: "5-8",
        instructions: [
          "Kick up into handstand against wall",
          "Lower head to ground",
          "Push back up to starting position",
          "Maintain tight core"
        ],
        muscles: ["Shoulders", "Triceps", "Upper Chest"],
        gifUrl: "https://media.giphy.com/media/3oKIPavRPgJYaNI97W/giphy.gif",
        difficulty: "advanced",
        calories: 200,
        safetyTips: [
          "Use a spotter when first learning",
          "Place a cushion under your head",
          "Keep your body in a straight line",
          "Engage your core throughout the movement"
        ],
        commonMistakes: [
          "Arching the back",
          "Not maintaining a straight body position",
          "Kicking off the wall for assistance",
          "Holding breath during the movement"
        ],
        variations: [
          "Pike Push-ups",
          "Wall Walks",
          "Deficit Handstand Push-ups",
          "Freestanding Handstand Push-ups"
        ]
      }
    ]
  },
  legs: {
    beginner: [
      {
        name: "Bodyweight Squats",
        equipment: "None",
        sets: 3,
        reps: "15-20",
        instructions: [
          "Stand with feet shoulder-width apart",
          "Lower hips back and down",
          "Keep chest up and back straight",
          "Push through heels to stand"
        ],
        muscles: ["Quadriceps", "Glutes", "Hamstrings"],
        gifUrl: "https://media.giphy.com/media/1qfKN8Dt0CRdCRxz9q/giphy.gif",
        difficulty: "beginner",
        calories: 150,
        safetyTips: [
          "Keep your knees in line with your toes",
          "Maintain a neutral spine",
          "Don't let your knees cave inward",
          "Breathe out as you push up"
        ],
        commonMistakes: [
          "Not going deep enough",
          "Letting knees cave inward",
          "Leaning too far forward",
          "Rising onto toes instead of keeping feet flat"
        ],
        variations: [
          "Sumo Squats",
          "Split Squats",
          "Jump Squats",
          "Pulse Squats"
        ]
      }
    ],
    intermediate: [
      {
        name: "Romanian Deadlifts",
        equipment: "Barbell",
        sets: 4,
        reps: "10-12",
        instructions: [
          "Hold barbell at hip level",
          "Hinge at hips while keeping back straight",
          "Lower bar along thighs",
          "Squeeze glutes to return to start"
        ],
        muscles: ["Hamstrings", "Glutes", "Lower Back"],
        gifUrl: "https://media.giphy.com/media/3o7TKRwpns23QMNNiE/giphy.gif",
        difficulty: "intermediate",
        calories: 200,
        safetyTips: [
          "Keep a slight bend in your knees throughout",
          "Maintain a neutral spine",
          "Keep the bar close to your body",
          "Engage your core to protect your lower back"
        ],
        commonMistakes: [
          "Rounding the back",
          "Bending the knees too much",
          "Not hinging at the hips properly",
          "Letting the bar drift away from the body"
        ],
        variations: [
          "Single-leg Romanian Deadlifts",
          "Dumbbell Romanian Deadlifts",
          "Sumo Romanian Deadlifts",
          "Deficit Romanian Deadlifts"
        ]
      }
    ],
    advanced: [
      {
        name: "Bulgarian Split Squats",
        equipment: "Dumbbells, Bench",
        sets: 4,
        reps: "8-10 each leg",
        instructions: [
          "Place rear foot on bench",
          "Hold dumbbells at sides",
          "Lower until rear knee nearly touches ground",
          "Push through front heel to stand"
        ],
        muscles: ["Quadriceps", "Glutes", "Hamstrings"],
        gifUrl: "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
        difficulty: "advanced",
        calories: 220,
        safetyTips: [
          "Keep your front knee in line with your toes",
          "Maintain an upright torso",
          "Control the movement throughout",
          "Use a stable bench or platform for your rear foot"
        ],
        commonMistakes: [
          "Leaning too far forward",
          "Not going deep enough",
          "Letting the front knee cave inward",
          "Putting too much weight on the back leg"
        ],
        variations: [
          "Elevated Bulgarian Split Squats",
          "Barbell Bulgarian Split Squats",
          "Pulse Bulgarian Split Squats",
          "Bulgarian Split Squat Jumps"
        ]
      }
    ]
  },
  biceps: {
    beginner: [
      {
        name: "Dumbbell Curls",
        equipment: "Dumbbells",
        sets: 3,
        reps: "12-15",
        instructions: [
          "Stand with dumbbells at sides",
          "Curl weights to shoulders",
          "Keep elbows close to body",
          "Lower with control"
        ],
        muscles: ["Biceps"],
        gifUrl: "https://media.giphy.com/media/l3UcjPVTaCVPyy6fC/giphy.gif",
        difficulty: "beginner",
        calories: 130,
        safetyTips: [
          "Keep your wrists straight throughout the movement",
          "Don't swing the weights",
          "Keep your upper arms stationary",
          "Control the weights on the way down"
        ],
        commonMistakes: [
          "Using momentum to swing the weights",
          "Moving the elbows forward",
          "Not fully extending the arms at the bottom",
          "Curling the wrists during the movement"
        ],
        variations: [
          "Alternating Dumbbell Curls",
          "Hammer Curls",
          "Concentration Curls",
          "Incline Dumbbell Curls"
        ]
      }
    ],
    intermediate: [
      {
        name: "Hammer Curls",
        equipment: "Dumbbells",
        sets: 3,
        reps: "10-12",
        instructions: [
          "Hold dumbbells with neutral grip",
          "Curl weights while keeping palms facing each other",
          "Squeeze biceps at top",
          "Lower with control"
        ],
        muscles: ["Biceps", "Brachialis"],
        gifUrl: "https://media.giphy.com/media/3o7TKRwpns23QMNNiE/giphy.gif",
        difficulty: "intermediate",
        calories: 140,
        safetyTips: [
          "Keep your elbows close to your sides",
          "Maintain a neutral wrist position",
          "Control the movement throughout",
          "Don't lean back to lift the weights"
        ],
        commonMistakes: [
          "Using momentum to lift the weights",
          "Moving the elbows too much",
          "Not maintaining the neutral grip",
          "Rushing through repetitions"
        ],
        variations: [
          "Alternating Hammer Curls",
          "Cross-body Hammer Curls",
          "Seated Hammer Curls",
          "Incline Hammer Curls"
        ]
      }
    ],
    advanced: [
      {
        name: "Chin-ups",
        equipment: "Pull-up Bar",
        sets: 4,
        reps: "8-12",
        instructions: [
          "Grip bar with palms facing you",
          "Pull chin over bar",
          "Lower with control",
          "Keep core tight"
        ],
        muscles: ["Biceps", "Lats", "Upper Back"],
        gifUrl: "https://media.giphy.com/media/3oKIPavRPgJYaNI97W/giphy.gif",
        difficulty: "advanced",
        calories: 180,
        safetyTips: [
          "Engage your core throughout the movement",
          "Don't swing or use momentum",
          "Control the descent",
          "Keep your shoulders down and back"
        ],
        commonMistakes: [
          "Using momentum to swing up",
          "Not completing full range of motion",
          "Holding breath during the movement",
          "Excessive body movement"
        ],
        variations: [
          "Weighted Chin-ups",
          "Close-grip Chin-ups",
          "Mixed-grip Chin-ups",
          "Towel Chin-ups"
        ]
      }
    ]
  },
  triceps: {
    beginner: [
      {
        name: "Diamond Push-ups",
        equipment: "None",
        sets: 3,
        reps: "10-12",
        instructions: [
          "Form diamond shape with hands under chest",
          "Lower chest to hands",
          "Keep elbows close to body",
          "Push back up"
        ],
        muscles: ["Triceps", "Chest", "Shoulders"],
        gifUrl: "https://media.giphy.com/media/7YCC3rjPxX5sY/giphy.gif",
        difficulty: "beginner",
        calories: 140,
        safetyTips: [
          "Keep your core engaged throughout",
          "Don't let your hips sag",
          "Keep your neck in a neutral position",
          "Start with modified versions if needed"
        ],
        commonMistakes: [
          "Placing hands too far forward",
          "Flaring elbows outward",
          "Not lowering chest enough",
          "Letting hips sag or pike up"
        ],
        variations: [
          "Knee Diamond Push-ups",
          "Incline Diamond Push-ups",
          "Decline Diamond Push-ups",
          "Plyometric Diamond Push-ups"
        ]
      }
    ],
    intermediate: [
      {
        name: "Skull Crushers",
        equipment: "EZ Bar",
        sets: 3,
        reps: "10-12",
        instructions: [
          "Lie on bench holding EZ bar",
          "Lower bar to forehead",
          "Keep upper arms stationary",
          "Extend arms to starting position"
        ],
        muscles: ["Triceps"],
        gifUrl: "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
        difficulty: "intermediate",
        calories: 150,
        safetyTips: [
          "Keep your upper arms perpendicular to the floor",
          "Don't lock out your elbows at the top",
          "Use a spotter for heavier weights",
          "Keep your elbows pointed toward the ceiling"
        ],
        commonMistakes: [
          "Moving the upper arms",
          "Flaring the elbows outward",
          "Using momentum to lift the weight",
          "Lowering the weight too quickly"
        ],
        variations: [
          "Dumbbell Skull Crushers",
          "Decline Skull Crushers",
          "Single-arm Skull Crushers",
          "Close-grip Bench Press"
        ]
      }
    ],
    advanced: [
      {
        name: "Close-Grip Bench Press",
        equipment: "Barbell, Bench",
        sets: 4,
        reps: "8-10",
        instructions: [
          "Grip bar with hands shoulder-width apart",
          "Lower bar to lower chest",
          "Keep elbows close to body",
          "Press bar up"
        ],
        muscles: ["Triceps", "Chest", "Front Deltoids"],
        gifUrl: "https://media.giphy.com/media/3oKIPavRPgJYaNI97W/giphy.gif",
        difficulty: "advanced",
        calories: 190,
        safetyTips: [
          "Keep your wrists straight",
          "Maintain a slight arch in your lower back",
          "Keep your feet firmly planted on the ground",
          "Use a spotter for heavier weights"
        ],
        commonMistakes: [
          "Grip too narrow (straining wrists)",
          "Flaring elbows outward",
          "Bouncing the bar off the chest",
          "Not keeping shoulders retracted"
        ],
        variations: [
          "Close-grip Floor Press",
          "Close-grip Dumbbell Press",
          "Board Press",
          "Close-grip Smith Machine Press"
        ]
      }
    ]
  },
  core: {
    beginner: [
      {
        name: "Plank",
        equipment: "None",
        sets: 3,
        reps: "30-60 seconds",
        instructions: [
          "Support body on forearms and toes",
          "Keep body straight from head to heels",
          "Engage core muscles",
          "Hold position"
        ],
        muscles: ["Core", "Shoulders", "Lower Back"],
        gifUrl: "https://media.giphy.com/media/xT8qBff8cRRFf7k2u4/giphy.gif",
        difficulty: "beginner",
        calories: 120,
        safetyTips: [
          "Keep your neck in a neutral position",
          "Don't let your hips sag or pike up",
          "Breathe normally throughout",
          "Start with shorter holds and gradually increase"
        ],
        commonMistakes: [
          "Letting hips sag",
          "Raising hips too high",
          "Looking up or down (straining neck)",
          "Holding breath"
        ],
        variations: [
          "Forearm Plank",
          "High Plank",
          "Side Plank",
          "Plank with Shoulder Taps"
        ]
      }
    ],
    intermediate: [
      {
        name: "Russian Twists",
        equipment: "Weight Plate or Dumbbell",
        sets: 3,
        reps: "20 total (10 each side)",
        instructions: [
          "Sit with knees bent and feet off ground",
          "Hold weight at chest level",
          "Rotate torso side to side",
          "Keep chest up"
        ],
        muscles: ["Obliques", "Core"],
        gifUrl: "https://media.giphy.com/media/3NwOzakbqIwgMQJMVf/giphy.gif",
        difficulty: "intermediate",
        calories: 150,
        safetyTips: [
          "Maintain good posture throughout",
          "Start with bodyweight before adding weight",
          "Keep your chest lifted",
          "Engage your core throughout the movement"
        ],
        commonMistakes: [
          "Rounding the lower back",
          "Using momentum instead of core strength",
          "Moving too quickly",
          "Not rotating far enough"
        ],
        variations: [
          "Weighted Russian Twists",
          "Feet-elevated Russian Twists",
          "Medicine Ball Russian Twists",
          "Standing Russian Twists"
        ]
      }
    ],
    advanced: [
      {
        name: "Dragon Flags",
        equipment: "Bench",
        sets: 3,
        reps: "6-8",
        instructions: [
          "Lie on bench and grip behind head",
          "Raise legs and lower back off bench",
          "Lower body while keeping straight",
          "Only upper back remains on bench"
        ],
        muscles: ["Core", "Lower Back", "Hip Flexors"],
        gifUrl: "https://media.giphy.com/media/3oKIPavRPgJYaNI97W/giphy.gif",
        difficulty: "advanced",
        calories: 200,
        safetyTips: [
          "Start with easier variations and progress gradually",
          "Keep your core engaged throughout",
          "Don't strain your neck",
          "Stop if you feel lower back pain"
        ],
        commonMistakes: [
          "Bending at the hips",
          "Not maintaining a straight body line",
          "Using momentum",
          "Holding breath during the movement"
        ],
        variations: [
          "Tuck Dragon Flags",
          "Single-leg Dragon Flags",
          "Negative Dragon Flags",
          "Hollow Body Hold"
        ]
      }
    ]
  },
  cardio: {
    beginner: [
      {
        name: "Jumping Jacks",
        equipment: "None",
        sets: 3,
        reps: "30-60 seconds",
        instructions: [
          "Stand with feet together and arms at sides",
          "Jump while spreading legs and raising arms overhead",
          "Jump back to starting position",
          "Repeat at a moderate pace"
        ],
        muscles: ["Full Body", "Cardiovascular System"],
        gifUrl: "https://media.giphy.com/media/l0HlTdK9f97qfOGRy/giphy.gif",
        difficulty: "beginner",
        calories: 150,
        safetyTips: [
          "Land softly with slightly bent knees",
          "Maintain good posture throughout",
          "Start slowly and increase pace gradually",
          "Breathe rhythmically"
        ],
        commonMistakes: [
          "Landing with straight legs",
          "Not extending arms fully",
          "Moving too quickly with poor form",
          "Hunching shoulders"
        ],
        variations: [
          "Cross-Jack",
          "Squat Jack",
          "Plank Jack",
          "Low-Impact Jumping Jack"
        ]
      },
      {
        name: "Mountain Climbers",
        equipment: "None",
        sets: 3,
        reps: "30-60 seconds",
        instructions: [
          "Start in high plank position",
          "Drive one knee toward chest",
          "Quickly switch legs in running motion",
          "Keep hips level throughout"
        ],
        muscles: ["Core", "Shoulders", "Hip Flexors", "Cardiovascular System"],
        gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjZlMzRkZDRiMzRlMzRiMzRkZDRiMzRlMzRiMzRkZDRiMzRlMzRiMw/UVAQv3UBgHrJm/giphy.gif",
        difficulty: "beginner",
        calories: 170,
        safetyTips: [
          "Keep your core engaged throughout",
          "Maintain a neutral spine",
          "Don't let your hips rise too high",
          "Start slowly and increase pace gradually"
        ],
        commonMistakes: [
          "Letting hips rise too high",
          "Not bringing knees far enough forward",
          "Bouncing or rocking back and forth",
          "Not maintaining shoulder stability"
        ],
        variations: [
          "Slow Mountain Climbers",
          "Cross-body Mountain Climbers",
          "Spider Mountain Climbers",
          "Sliding Mountain Climbers"
        ]
      }
    ],
    intermediate: [
      {
        name: "Burpees",
        equipment: "None",
        sets: 3,
        reps: "10-15",
        instructions: [
          "Start standing, then squat down and place hands on floor",
          "Jump feet back to plank position",
          "Perform a push-up (optional)",
          "Jump feet forward to hands, then explosively jump up with arms overhead"
        ],
        muscles: ["Full Body", "Cardiovascular System"],
        gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzRiMzRkZDRiMzRlMzRiMzRkZDRiMzRlMzRiMzRkZDRiMzRlMzRiMw/23hPPMRgPxbNBlPQe3/giphy.gif",
        difficulty: "intermediate",
        calories: 200,
        safetyTips: [
          "Land softly with bent knees",
          "Maintain proper form throughout",
          "Scale the exercise to your fitness level",
          "Take breaks if needed"
        ],
        commonMistakes: [
          "Rounding the back in plank position",
          "Not completing full range of motion",
          "Landing with straight legs",
          "Holding breath"
        ],
        variations: [
          "Half Burpee (no push-up)",
          "Burpee with Push-up",
          "Burpee Box Jump",
          "Single-leg Burpee"
        ]
      }
    ],
    advanced: [
      {
        name: "High-Intensity Interval Sprints",
        equipment: "None (outdoor space or treadmill)",
        sets: 8,
        reps: "30 seconds sprint, 30 seconds rest",
        instructions: [
          "Sprint at maximum effort for 30 seconds",
          "Rest or walk for 30 seconds",
          "Repeat for desired number of intervals",
          "Focus on proper running form"
        ],
        muscles: ["Legs", "Glutes", "Cardiovascular System"],
        gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzRiMzRkZDRiMzRlMzRiMzRkZDRiMzRlMzRiMzRkZDRiMzRlMzRiMw/l46CuEktoMjruBV9m/giphy.gif",
        difficulty: "advanced",
        calories: 250,
        safetyTips: [
          "Warm up thoroughly before sprinting",
          "Maintain proper running form",
          "Stay hydrated",
          "Stop if you feel dizzy or experience pain"
        ],
        commonMistakes: [
          "Not warming up properly",
          "Poor running form",
          "Starting too fast and burning out",
          "Not allowing adequate recovery"
        ],
        variations: [
          "Hill Sprints",
          "Shuttle Runs",
          "Pyramid Intervals",
          "Fartlek Training"
        ]
      }
    ]
  },
  glutes: {
    beginner: [
      {
        name: "Glute Bridges",
        equipment: "None",
        sets: 3,
        reps: "15-20",
        instructions: [
          "Lie on back with knees bent and feet flat",
          "Push through heels to lift hips toward ceiling",
          "Squeeze glutes at top position",
          "Lower with control"
        ],
        muscles: ["Glutes", "Hamstrings", "Lower Back"],
        gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzRiMzRkZDRiMzRlMzRiMzRkZDRiMzRlMzRiMzRkZDRiMzRlMzRiMw/3oKIPrc2ngFZ6BTyww/giphy.gif",
        difficulty: "beginner",
        calories: 120,
        safetyTips: [
          "Keep your core engaged throughout",
          "Don't overextend your lower back",
          "Keep feet hip-width apart",
          "Focus on squeezing glutes, not pushing with lower back"
        ],
        commonMistakes: [
          "Not lifting hips high enough",
          "Using lower back instead of glutes",
          "Feet positioned too far from glutes",
          "Rushing through repetitions"
        ],
        variations: [
          "Single-leg Glute Bridge",
          "Elevated Glute Bridge",
          "Banded Glute Bridge",
          "Glute Bridge March"
        ]
      }
    ],
    intermediate: [
      {
        name: "Hip Thrusts",
        equipment: "Barbell, Bench",
        sets: 4,
        reps: "10-12",
        instructions: [
          "Sit with upper back against bench, barbell across hips",
          "Plant feet firmly on ground",
          "Drive through heels to lift hips",
          "Squeeze glutes at top position"
        ],
        muscles: ["Glutes", "Hamstrings"],
        gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzRiMzRkZDRiMzRlMzRiMzRkZDRiMzRlMzRiMzRkZDRiMzRlMzRiMw/xT8qBmCnJsFqyYGRsQ/giphy.gif",
        difficulty: "intermediate",
        calories: 180,
        safetyTips: [
          "Use a barbell pad or towel for comfort",
          "Keep your chin tucked to maintain neutral spine",
          "Drive through heels, not toes",
          "Keep knees at 90 degrees at top position"
        ],
        commonMistakes: [
          "Hyperextending the lower back",
          "Not achieving full hip extension",
          "Pushing through toes instead of heels",
          "Using momentum instead of controlled movement"
        ],
        variations: [
          "Single-leg Hip Thrust",
          "Banded Hip Thrust",
          "B-stance Hip Thrust",
          "Paused Hip Thrust"
        ]
      }
    ],
    advanced: [
      {
        name: "Barbell Hip Thrusts",
        equipment: "Barbell, Bench",
        sets: 4,
        reps: "8-10",
        instructions: [
          "Sit with upper back against bench, barbell across hips",
          "Plant feet firmly on ground",
          "Drive through heels to lift hips",
          "Squeeze glutes at top position"
        ],
        muscles: ["Glutes", "Hamstrings"],
        gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzRiMzRkZDRiMzRlMzRiMzRkZDRiMzRlMzRiMzRkZDRiMzRlMzRiMw/xT8qBmCnJsFqyYGRsQ/giphy.gif",
        difficulty: "advanced",
        calories: 200,
        safetyTips: [
          "Use a barbell pad for comfort",
          "Start with lighter weights to perfect form",
          "Keep your core engaged throughout",
          "Maintain neutral spine position"
        ],
        commonMistakes: [
          "Hyperextending at the top",
          "Not achieving full range of motion",
          "Using lower back instead of glutes",
          "Incorrect bench height"
        ],
        variations: [
          "Single-leg Barbell Hip Thrust",
          "Banded Barbell Hip Thrust",
          "Deficit Hip Thrust",
          "Tempo Hip Thrust"
        ]
      }
    ]
  }
};

export const workoutPlans: WorkoutPlan[] = [
  {
    id: '1',
    title: 'Full Body Power',
    duration: '45 min',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    calories: 400,
    category: 'Full Body',
    exercises: [
      exercises.chest.intermediate[0],
      exercises.back.intermediate[0],
      exercises.legs.intermediate[0],
      exercises.core.intermediate[0]
    ]
  },
  {
    id: '2',
    title: 'Upper Body Focus',
    duration: '40 min',
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    calories: 300,
    category: 'Upper Body',
    exercises: [
      exercises.chest.beginner[0],
      exercises.back.beginner[0],
      exercises.shoulders.beginner[0],
      exercises.biceps.beginner[0],
      exercises.triceps.beginner[0]
    ]
  },
  {
    id: '3',
    title: 'Core Crusher',
    duration: '30 min',
    difficulty: 'Advanced',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    calories: 250,
    category: 'Core',
    exercises: [
      exercises.core.advanced[0],
      exercises.core.intermediate[0],
      exercises.core.beginner[0]
    ]
  },
  {
    id: '4',
    title: 'Lower Body Builder',
    duration: '50 min',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    calories: 450,
    category: 'Legs',
    exercises: [
      exercises.legs.intermediate[0],
      exercises.legs.beginner[0],
      exercises.legs.advanced[0]
    ]
  },
  {
    id: '5',
    title: 'Cardio Blast',
    duration: '35 min',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    calories: 380,
    category: 'Cardio',
    exercises: [
      exercises.cardio.beginner[0],
      exercises.cardio.beginner[1],
      exercises.cardio.intermediate[0]
    ]
  },
  {
    id: '6',
    title: 'Glute Sculptor',
    duration: '40 min',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    calories: 320,
    category: 'Legs',
    exercises: [
      exercises.glutes.beginner[0],
      exercises.glutes.intermediate[0],
      exercises.legs.intermediate[0]
    ]
  }
];