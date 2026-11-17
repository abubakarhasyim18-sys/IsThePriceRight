/* Questions adapted from the nine teacher-provided PDFs. Page numbers are PDF pages, counted from 1. */
const syllabus = {
  "version": "2026-11-syllabus",
  "sources": {
    "verbal": {
      "title": "Lesson 1_T4W7_MPI_Customer Service_Verbal Communication_HSN.pdf",
      "pages": 21
    },
    "nonverbal": {
      "title": "Lesson 2_T4W8_MPI_Customer Service_Non-Verbal Communication_HSN.pdf",
      "pages": 20
    },
    "seal": {
      "title": "Lesson 3_Seal & Unseal Carton Boxes_HSN.pdf",
      "pages": 28
    },
    "cutter": {
      "title": "Lesson 1_Seal & Unseal Carton Boxes - Use Cutter_HSN.pdf",
      "pages": 25
    },
    "display": {
      "title": "T3W9 - T3W10_Apparel Display_Hang T-shirt.pdf",
      "pages": 23
    },
    "fold": {
      "title": "introduction to garment folding HSN MSN.pdf",
      "pages": 30
    },
    "steamuse": {
      "title": "Using the garment steamer.pdf",
      "pages": 28
    },
    "steamintro": {
      "title": "Introduction to Garment Steamer HSN.pdf",
      "pages": 21
    },
    "apparel": {
      "title": "Retail Operations (Apparel store).pdf",
      "pages": 33
    }
  },
  "rounds": [
    {
      "name": "Customer Care",
      "icon": "💬",
      "color": "#eee5fc",
      "sub": "Kind words. Friendly body language."
    },
    {
      "name": "Ready for Work",
      "icon": "👕",
      "color": "#fce8ba",
      "sub": "Know your shop. Look neat. Stay clean."
    },
    {
      "name": "Box It Safely",
      "icon": "📦",
      "color": "#dcece2",
      "sub": "Tools, packing signs and safe boxes."
    },
    {
      "name": "Hang & Sort",
      "icon": "🧥",
      "color": "#f9e0d1",
      "sub": "Hang T-shirts. Sort your display."
    },
    {
      "name": "Fold It Neatly",
      "icon": "👖",
      "color": "#dfeaf4",
      "sub": "Fold, check and care for clothes."
    },
    {
      "name": "Steam Smart",
      "icon": "♨️",
      "color": "#ece2f6",
      "sub": "Know the steamer. Work safely."
    }
  ],
  "bank": [
    {
      "id": "R1Q1",
      "r": 0,
      "type": "choice",
      "title": "A customer walks in. What can you say?",
      "instruction": "Tap the friendly greeting.",
      "answer": 1,
      "hint": "Offer to help the customer.",
      "explain": "Say, “Hi Sir or Mdm. How can I help you?”",
      "refs": [
        {
          "source": "verbal",
          "pages": [
            12,
            16
          ]
        }
      ],
      "options": [
        "😠|What do you want?",
        "👋|Hi! How can I help you?",
        "🤫|Do not talk to me."
      ]
    },
    {
      "id": "R1Q2",
      "r": 0,
      "type": "multi",
      "title": "Choose TWO good ways to speak.",
      "instruction": "Tap two answers. Then tap Check answer.",
      "answer": [
        0,
        2
      ],
      "hint": "Use clear words and a friendly voice.",
      "explain": "Speak clearly. Use a friendly tone. Do not shout.",
      "refs": [
        {
          "source": "verbal",
          "pages": [
            12,
            13,
            14,
            15
          ]
        }
      ],
      "options": [
        "💬|Speak clearly",
        "📣|Shout loudly",
        "🙂|Use a friendly voice"
      ]
    },
    {
      "id": "R1Q3",
      "r": 0,
      "type": "match",
      "title": "Match the speaking skills.",
      "instruction": "Tap a word on the left. Then tap its meaning.",
      "answer": [
        2,
        0,
        1
      ],
      "hint": "Pace is speed. Volume is how loud your voice is.",
      "explain": "Pace means speaking speed. Tone is how your voice sounds. Volume is how loud your voice is.",
      "refs": [
        {
          "source": "verbal",
          "pages": [
            13,
            14,
            15
          ]
        }
      ],
      "left": [
        "Pace",
        "Tone",
        "Volume"
      ],
      "right": [
        "Friendly or angry voice",
        "Loud or soft voice",
        "Fast or slow speech"
      ]
    },
    {
      "id": "R1Q4",
      "r": 0,
      "type": "choice",
      "title": "Which is body language?",
      "instruction": "Body language is a message people can SEE.",
      "answer": 2,
      "hint": "Look for a facial expression.",
      "explain": "A smile is a facial expression. It is non-verbal communication.",
      "refs": [
        {
          "source": "nonverbal",
          "pages": [
            9,
            10
          ]
        }
      ],
      "options": [
        "💬|Saying “Hello”",
        "🔊|Speaking loudly",
        "🙂|Smiling"
      ]
    },
    {
      "id": "R1Q5",
      "r": 0,
      "type": "choice",
      "title": "Is this good customer care?",
      "instruction": "A worker stands too close to a customer.",
      "answer": 1,
      "hint": "Give the customer enough space.",
      "explain": "No. Standing too close may make a customer uncomfortable. Give them space.",
      "refs": [
        {
          "source": "nonverbal",
          "pages": [
            14
          ]
        }
      ],
      "emoji": "🧍 ↔ 🧍",
      "product": "Give people space",
      "options": [
        "✓|Yes",
        "✕|No"
      ]
    },
    {
      "id": "R1Q6",
      "r": 0,
      "type": "order",
      "title": "Help a customer find fresh milk.",
      "instruction": "Tap the steps in order. Start with the greeting.",
      "answer": [
        2,
        0,
        1
      ],
      "hint": "Say hello first. Offer more help at the end.",
      "explain": "1. Greet the customer. 2. Show them where the milk is. 3. Say, “Please let me know if you need help.”",
      "refs": [
        {
          "source": "verbal",
          "pages": [
            21
          ]
        },
        {
          "source": "nonverbal",
          "pages": [
            20
          ]
        }
      ],
      "options": [
        "Show them where the milk is",
        "Offer more help",
        "Greet the customer"
      ]
    },
    {
      "id": "R2Q1",
      "r": 1,
      "type": "choice",
      "title": "What does an apparel store sell?",
      "instruction": "Apparel means clothes and things we wear.",
      "answer": 0,
      "hint": "Think about things you wear.",
      "explain": "An apparel store sells clothes, shoes, accessories and bags.",
      "refs": [
        {
          "source": "apparel",
          "pages": [
            8
          ]
        }
      ],
      "options": [
        "👕|Clothes and shoes",
        "🥦|Fruit and vegetables",
        "🔧|Car parts"
      ]
    },
    {
      "id": "R2Q2",
      "r": 1,
      "type": "choice",
      "title": "Where would you look for sports clothes?",
      "instruction": "Tap the type of apparel store.",
      "answer": 2,
      "hint": "Look for the word “sports”.",
      "explain": "A sports apparel store sells sports clothes, shoes and accessories.",
      "refs": [
        {
          "source": "apparel",
          "pages": [
            6,
            10
          ]
        }
      ],
      "options": [
        "🤰|Maternity store",
        "💎|Luxury store",
        "👟|Sports store"
      ]
    },
    {
      "id": "R2Q3",
      "r": 1,
      "type": "multi",
      "title": "Choose TWO ways to look neat.",
      "instruction": "Get ready to work in the shop.",
      "answer": [
        1,
        2
      ],
      "hint": "Think about your hair and uniform.",
      "explain": "Keep your hair neat. Wear a well-ironed uniform.",
      "refs": [
        {
          "source": "apparel",
          "pages": [
            13
          ]
        }
      ],
      "options": [
        "🙈|Leave your hair messy",
        "👕|Wear a well-ironed uniform",
        "🪮|Comb or tie your hair"
      ]
    },
    {
      "id": "R2Q4",
      "r": 1,
      "type": "choice",
      "title": "How should your nails look?",
      "instruction": "Tap the best answer.",
      "answer": 1,
      "hint": "Clean nails help you look neat.",
      "explain": "Keep your nails short, clean and well maintained.",
      "refs": [
        {
          "source": "apparel",
          "pages": [
            13,
            16
          ]
        }
      ],
      "options": [
        "✕|Long and dirty",
        "✓|Short and clean",
        "✕|Covered in dirt"
      ]
    },
    {
      "id": "R2Q5",
      "r": 1,
      "type": "number",
      "title": "How long should you scrub your hands?",
      "instruction": "Use soap and water. Type the minimum number of seconds.",
      "answer": 20,
      "hint": "The lesson says at least twenty seconds.",
      "explain": "Scrub your hands with soap for at least 20 seconds.",
      "refs": [
        {
          "source": "apparel",
          "pages": [
            25,
            29
          ]
        }
      ],
      "emoji": "🧼",
      "product": "Scrub with soap and water",
      "unit": "seconds"
    },
    {
      "id": "R2Q6",
      "r": 1,
      "type": "choice",
      "title": "Why do we keep our body clean?",
      "instruction": "Tap the reason for good personal hygiene.",
      "answer": 0,
      "hint": "Clean hands and a clean body help stop germs spreading.",
      "explain": "Good personal hygiene helps reduce the spread of germs and illness.",
      "refs": [
        {
          "source": "apparel",
          "pages": [
            18,
            19,
            21
          ]
        }
      ],
      "options": [
        "🧼|To reduce the spread of germs",
        "🦠|To spread more germs",
        "👕|To make clothes dirty"
      ]
    },
    {
      "id": "R3Q1",
      "r": 2,
      "type": "match",
      "title": "Match the packing tools.",
      "instruction": "Tap a tool or part. Then tap its job.",
      "answer": [
        1,
        2,
        0
      ],
      "hint": "A cutter opens a box. A tape dispenser seals it.",
      "explain": "A cutter opens boxes. A tape dispenser seals boxes. The grip is the part you hold.",
      "refs": [
        {
          "source": "cutter",
          "pages": [
            14,
            15
          ]
        },
        {
          "source": "seal",
          "pages": [
            3,
            4
          ]
        }
      ],
      "left": [
        "Cutter",
        "Tape dispenser",
        "Cutter grip"
      ],
      "right": [
        "The part you hold",
        "Open a box",
        "Seal a box"
      ]
    },
    {
      "id": "R3Q2",
      "r": 2,
      "type": "choice",
      "title": "You have finished using the cutter.",
      "instruction": "How should the blade be?",
      "answer": 2,
      "hint": "Release the slider. Check that the blade is hidden.",
      "explain": "Release the slider on the auto-retract cutter. Make sure the blade is hidden.",
      "refs": [
        {
          "source": "cutter",
          "pages": [
            20
          ]
        },
        {
          "source": "seal",
          "pages": [
            5,
            20
          ]
        }
      ],
      "options": [
        "✕|Blade sticking out",
        "✕|Blade exposed while walking",
        "✓|Blade hidden inside"
      ]
    },
    {
      "id": "R3Q3",
      "r": 2,
      "type": "order",
      "title": "Pack items into a carton box.",
      "instruction": "Tap the three steps in order.",
      "answer": [
        1,
        2,
        0
      ],
      "hint": "Seal the bottom before adding the items.",
      "explain": "1. Seal the bottom. 2. Put the items neatly inside. 3. Seal the top.",
      "refs": [
        {
          "source": "seal",
          "pages": [
            27
          ]
        }
      ],
      "options": [
        "Seal the top of the box",
        "Seal the bottom of the box",
        "Put the items neatly inside"
      ]
    },
    {
      "id": "R3Q4",
      "r": 2,
      "type": "choice",
      "title": "What shape should the tape make?",
      "instruction": "Look at a correctly sealed box in your lesson.",
      "answer": 0,
      "hint": "Seal the centre opening and both sides.",
      "explain": "The tape should make an H shape: across the centre opening and both sides.",
      "refs": [
        {
          "source": "seal",
          "pages": [
            15,
            17,
            18
          ]
        }
      ],
      "emoji": "📦",
      "product": "A sealed carton box",
      "options": [
        "H",
        "O",
        "X"
      ]
    },
    {
      "id": "R3Q5",
      "r": 2,
      "type": "choice",
      "title": "What does this packing sign mean?",
      "instruction": "Look at the umbrella sign on the box.",
      "answer": 1,
      "hint": "An umbrella protects things from water.",
      "explain": "The umbrella sign means “Keep dry”. Keep the box away from water.",
      "refs": [
        {
          "source": "cutter",
          "pages": [
            12
          ]
        }
      ],
      "symbol": "umbrella",
      "product": "Packing sign",
      "options": [
        "📦|Stack more boxes",
        "☂|Keep dry",
        "✂|Cut here"
      ]
    },
    {
      "id": "R3Q6",
      "r": 2,
      "type": "multi",
      "title": "Choose TWO safe actions.",
      "instruction": "You are using a tape dispenser.",
      "answer": [
        0,
        2
      ],
      "hint": "Keep your hand away from the sharp parts.",
      "explain": "Keep your hand away from the blade. Hold the tape dispenser by its handle.",
      "refs": [
        {
          "source": "seal",
          "pages": [
            4,
            23,
            24
          ]
        }
      ],
      "options": [
        "🖐️|Keep your hand away from the blade",
        "✕|Put fingers near the cutting area",
        "🛡️|Hold the tape dispenser by its handle"
      ]
    },
    {
      "id": "R4Q1",
      "r": 3,
      "type": "choice",
      "title": "What must you protect when hanging a T-shirt?",
      "instruction": "Do not pull or stretch this part.",
      "answer": 1,
      "hint": "This part goes around your neck.",
      "explain": "Do not stretch the collar when hanging a T-shirt.",
      "refs": [
        {
          "source": "display",
          "pages": [
            11
          ]
        }
      ],
      "emoji": "👕",
      "product": "Hang a T-shirt carefully",
      "options": [
        "👖|The trouser pocket",
        "👕|The collar",
        "🪡|The price label"
      ]
    },
    {
      "id": "R4Q2",
      "r": 3,
      "type": "match",
      "title": "Match the display equipment.",
      "instruction": "Tap the equipment. Then tap what it holds.",
      "answer": [
        2,
        0,
        1
      ],
      "hint": "A top hanger is for tops. A clip hanger can hold pants.",
      "explain": "Use a top hanger for a T-shirt. Use a clip hanger for pants. Hang the hangers on a rolling rack.",
      "refs": [
        {
          "source": "display",
          "pages": [
            2,
            14
          ]
        },
        {
          "source": "steamuse",
          "pages": [
            27,
            28
          ]
        }
      ],
      "left": [
        "Top hanger",
        "Clip hanger",
        "Rolling rack"
      ],
      "right": [
        "Pants",
        "Hangers with clothes",
        "T-shirt"
      ]
    },
    {
      "id": "R4Q3",
      "r": 3,
      "type": "order",
      "title": "Sort the T-shirts on the rack.",
      "instruction": "Tap the sorting order taught in your lesson.",
      "answer": [
        1,
        0,
        2
      ],
      "hint": "Start with design. Then colour. Finish with size.",
      "explain": "1. Sort by design. 2. Sort by colour. 3. Sort by size.",
      "refs": [
        {
          "source": "display",
          "pages": [
            17,
            18
          ]
        }
      ],
      "options": [
        "Sort by colour",
        "Sort by design",
        "Sort by size"
      ]
    },
    {
      "id": "R4Q4",
      "r": 3,
      "type": "order",
      "title": "Get ready to hang a T-shirt.",
      "instruction": "You already have a T-shirt. Tap the next steps in order.",
      "answer": [
        2,
        1,
        0
      ],
      "hint": "Check the size before choosing the hanger.",
      "explain": "1. Check the T-shirt size. 2. Choose a hanger for that size. 3. Hang the T-shirt.",
      "refs": [
        {
          "source": "display",
          "pages": [
            14
          ]
        }
      ],
      "options": [
        "Hang the T-shirt",
        "Choose a hanger for that size",
        "Check the T-shirt size"
      ]
    },
    {
      "id": "R4Q5",
      "r": 3,
      "type": "choice",
      "title": "Why do we keep displays neat?",
      "instruction": "Think about the customer.",
      "answer": 2,
      "hint": "A neat display makes items easy to find.",
      "explain": "Neat displays help customers find items easily. They make the shop look attractive and professional.",
      "refs": [
        {
          "source": "display",
          "pages": [
            7
          ]
        }
      ],
      "options": [
        "✕|To hide all the clothes",
        "✕|To make items harder to find",
        "✓|To help customers find items"
      ]
    },
    {
      "id": "R4Q6",
      "r": 3,
      "type": "order",
      "title": "Take a T-shirt off the display.",
      "instruction": "Tap the first three steps from your lesson.",
      "answer": [
        0,
        2,
        1
      ],
      "hint": "Take it off the hanger before folding it.",
      "explain": "1. Unhang the T-shirt. 2. Fold the T-shirt. 3. Return the hanger to its place. Then return the T-shirt to its place.",
      "refs": [
        {
          "source": "display",
          "pages": [
            21
          ]
        }
      ],
      "options": [
        "Unhang the T-shirt",
        "Return the hanger to its place",
        "Fold the T-shirt"
      ]
    },
    {
      "id": "R5Q1",
      "r": 4,
      "type": "match",
      "title": "Match the label details.",
      "instruction": "These are practice labels. Match each detail.",
      "answer": [
        1,
        2,
        0
      ],
      "hint": "A size label tells you the size. “Made in” tells you the country.",
      "explain": "Size M tells you the size. A brand name tells you the brand. “Made in Singapore” tells you the country of manufacture.",
      "refs": [
        {
          "source": "fold",
          "pages": [
            9
          ]
        }
      ],
      "left": [
        "Size M",
        "Brand name",
        "Made in Singapore"
      ],
      "right": [
        "Country made",
        "Size",
        "Brand"
      ]
    },
    {
      "id": "R5Q2",
      "r": 4,
      "type": "multi",
      "title": "What must show on a folded top?",
      "instruction": "Pick TWO things customers need to see.",
      "answer": [
        0,
        1
      ],
      "hint": "Think about the size and the logo.",
      "explain": "The size must be visible. The logo must be shown.",
      "refs": [
        {
          "source": "fold",
          "pages": [
            20
          ]
        }
      ],
      "options": [
        "🏷️|The size",
        "👕|The logo",
        "✕|A hidden label"
      ]
    },
    {
      "id": "R5Q3",
      "r": 4,
      "type": "multi",
      "title": "Get pants ready for folding.",
      "instruction": "Pick TWO things to check.",
      "answer": [
        1,
        2
      ],
      "hint": "Check the buttons and pockets.",
      "explain": "Do up the buttons. Check that pockets are empty and flat.",
      "refs": [
        {
          "source": "fold",
          "pages": [
            23
          ]
        }
      ],
      "options": [
        "✕|Leave things in the pockets",
        "✓|Do up the buttons",
        "✓|Empty and flatten the pockets"
      ]
    },
    {
      "id": "R5Q4",
      "r": 4,
      "type": "choice",
      "title": "The folding board leaves the top uneven.",
      "instruction": "What should you do?",
      "answer": 2,
      "hint": "Check the garment after using the board.",
      "explain": "Adjust the garment so that it is folded neatly. A folding board may not fold it perfectly.",
      "refs": [
        {
          "source": "fold",
          "pages": [
            21
          ]
        }
      ],
      "options": [
        "✕|Display it without checking",
        "✕|Leave it in a messy pile",
        "✓|Adjust the fold neatly"
      ]
    },
    {
      "id": "R5Q5",
      "r": 4,
      "type": "choice",
      "title": "You find a stained garment.",
      "instruction": "What should you do?",
      "answer": 0,
      "hint": "Do not put a stained garment on display.",
      "explain": "Remove the garment from display and tell your supervisor.",
      "refs": [
        {
          "source": "fold",
          "pages": [
            7,
            26
          ]
        }
      ],
      "options": [
        "🛡️|Remove it and tell your supervisor",
        "✕|Hide the stain and display it",
        "✕|Leave it for the customer"
      ]
    },
    {
      "id": "R5Q6",
      "r": 4,
      "type": "multi",
      "title": "Which TWO things can damage clothes?",
      "instruction": "Keep these away when handling garments.",
      "answer": [
        0,
        2
      ],
      "hint": "Sharp tools can tear clothes. Liquids can wet or soil clothes.",
      "explain": "Keep cutting tools and liquids away from garments. They can tear, damage, soil or wet the clothes.",
      "refs": [
        {
          "source": "fold",
          "pages": [
            24,
            25
          ]
        }
      ],
      "options": [
        "✂️|Scissors",
        "🧺|A clean folding area",
        "💧|Water or other liquids"
      ]
    },
    {
      "id": "R6Q1",
      "r": 5,
      "type": "choice",
      "title": "What does a garment steamer do?",
      "instruction": "Tap its main job.",
      "answer": 1,
      "hint": "Think about wrinkled clothes.",
      "explain": "A garment steamer uses hot steam to remove wrinkles from clothes.",
      "refs": [
        {
          "source": "steamintro",
          "pages": [
            5
          ]
        },
        {
          "source": "steamuse",
          "pages": [
            5
          ]
        }
      ],
      "options": [
        "✕|Cuts the clothes",
        "♨️|Removes wrinkles",
        "✕|Puts stains on clothes"
      ]
    },
    {
      "id": "R6Q2",
      "r": 5,
      "type": "match",
      "title": "Match the steamer parts.",
      "instruction": "Tap a part. Then tap its job.",
      "answer": [
        2,
        0,
        1
      ],
      "hint": "The tank stores water. The steam head releases steam.",
      "explain": "The water tank stores water. The steam head releases steam. The adjustable pole changes the height.",
      "refs": [
        {
          "source": "steamintro",
          "pages": [
            7
          ]
        },
        {
          "source": "steamuse",
          "pages": [
            7,
            9
          ]
        }
      ],
      "left": [
        "Water tank",
        "Steam head",
        "Adjustable pole"
      ],
      "right": [
        "Releases steam",
        "Changes the height",
        "Stores water"
      ]
    },
    {
      "id": "R6Q3",
      "r": 5,
      "type": "order",
      "title": "Get ready to fill the water tank.",
      "instruction": "Tap the safe order. Your teacher is helping you.",
      "answer": [
        1,
        2,
        0
      ],
      "hint": "The plug must be out before you add water.",
      "explain": "1. Make sure the power plug is out. 2. Fill to the recommended water level. 3. Connect the power only after filling is complete.",
      "refs": [
        {
          "source": "steamintro",
          "pages": [
            16
          ]
        },
        {
          "source": "steamuse",
          "pages": [
            4,
            11,
            16,
            17
          ]
        }
      ],
      "options": [
        "Connect the power after filling",
        "Make sure the power plug is out",
        "Fill to the recommended water level"
      ]
    },
    {
      "id": "R6Q4",
      "r": 5,
      "type": "multi",
      "title": "Choose TWO steamer safety rules.",
      "instruction": "Tap two safe actions.",
      "answer": [
        1,
        2
      ],
      "hint": "Think about hot parts and the power cord.",
      "explain": "Keep the power cord clear of the walkway. Do not touch the hot steam head or soleplate.",
      "refs": [
        {
          "source": "steamintro",
          "pages": [
            15,
            18
          ]
        },
        {
          "source": "steamuse",
          "pages": [
            11
          ]
        }
      ],
      "options": [
        "✕|Touch the hot steam head",
        "🛡️|Keep the cord clear of the walkway",
        "🖐️|Keep hands away from hot parts"
      ]
    },
    {
      "id": "R6Q5",
      "r": 5,
      "type": "choice",
      "title": "Is it safe to leave a hot steamer alone?",
      "instruction": "Tap one answer.",
      "answer": 1,
      "hint": "Someone could touch a hot part or trip on the cord.",
      "explain": "No. Do not leave a hot steamer unattended. Unplug it after use.",
      "refs": [
        {
          "source": "steamintro",
          "pages": [
            17,
            19
          ]
        },
        {
          "source": "steamuse",
          "pages": [
            11
          ]
        }
      ],
      "options": [
        "✓|Yes",
        "✕|No"
      ]
    },
    {
      "id": "R6Q6",
      "r": 5,
      "type": "choice",
      "title": "The garment is steamed and neat.",
      "instruction": "Where should you put it for display?",
      "answer": 0,
      "hint": "Hang it neatly where customers can see it.",
      "explain": "Hang the steamed garment on the garment rack for display.",
      "refs": [
        {
          "source": "steamuse",
          "pages": [
            22
          ]
        }
      ],
      "options": [
        "🧥|On the garment rack",
        "✕|On the floor",
        "✕|In a crumpled pile"
      ]
    }
  ]
};
