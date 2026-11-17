# Retail Showtime: Is The Price Right?

An accessible retail-operations game show with 36 questions aligned to nine teacher-provided teaching PDFs. Designed for simple reading, large controls and play without a time limit.

[Play the current game](https://retail-showtime-classroom-7k4.abubakarhasyim18.chatgpt.site)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/abubakarhasyim18-sys/IsThePriceRight)

## Lesson topics

1. Customer care: verbal and non-verbal communication.
2. Ready for work: apparel stores, personal grooming and hygiene.
3. Box it safely: packing tools, cutter safety, H-shaped sealing and packing signs.
4. Hang and sort: T-shirt collars, hangers, rack sorting and removing clothes.
5. Fold it neatly: garment labels, visible size and logo, pockets, buttons and garment care.
6. Steam smart: steamer purpose, parts, safe filling, hot parts and garment display.

Each topic has six questions. Teacher settings offer a short show (6), standard show (18) or full show (36). Short and standard shows choose a fresh mix from every topic. Students can also choose one topic at a time.

Question formats include single choice, two-answer selection, matching, ordering and typed numbers. Tap-to-match and tap-to-order avoid dragging. Read-to-me uses browser speech synthesis when available.

Correct answers earn one star, including correct second tries. A hint or a wrong attempt is recorded as help. After two wrong attempts, the game explains the answer and offers the next question. The wheel gives 1–3 separate bonus stars. Learning results distinguish first-try answers, answers with help, and questions to practise again.

Background music and gentle correct/wrong tones use Web Audio and start after a tap. There is no applause audio. Music and sound have separate controls.

The [teacher guide](dist/teacher-guide.html) maps every question to its source PDF pages. The original uploaded PDFs, classroom photographs and student information are not included in this repository. Some practical steps are shown only as images or videos in the resources; the game does not invent those missing steps. Follow teacher supervision and equipment instructions for practical work.

## Run and host

Serve `dist/` using any static web server, or deploy this repository on Netlify. `netlify.toml` sets the publish folder to `dist`; no build command or application dependencies are needed. `.netlify/` is ignored so local linking state is never committed.

Run checks with:

```sh
node --check dist/app.js
node --check dist/lessons.js
node --check dist/teacher-guide.js
node tests/game.cjs
```

The game stores preferences only in the browser and does not collect student names or student records. No login is built into the game; hosting-level access depends on the provider configuration.

Validation covers question data and source references, the click handlers for all 36 questions, show lengths, retries, hints, scoring, wheel outcomes and audio-control paths. Browser layout and audible playback were not verified because managed browser-control tools were unavailable.

Original game inspired by television game shows. Not affiliated with The Price Is Right.
