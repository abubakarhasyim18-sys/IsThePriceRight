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

## My Star Shop

Question stars are saved to the wallet as they are earned. Wheel stars are saved when the spin finishes. Credits have a unique game/question identifier so opening the shop, revisiting results or repeating a confirmation does not add stars again.

Students start with a free rack and till. They can buy 17 additional decorations, retail displays and colours for 1–8 stars. The purchase panel shows the current balance, cost and remaining balance before confirmation. Unaffordable and duplicate purchases never charge stars.

Pick an owned item, then tap one of six room spots. Move items or put them away for free; replaced items stay in My items. Bought wall and floor colours can be reused for free. A shop name can be up to 24 characters. Opening the shop pauses the current quiz view and preserves selections, hints, typed answers and scoring.

The wallet, owned items, room layout, colours and shop name save in this browser using local storage. One browser profile has one shared shop; different devices or browser profiles have separate shops. Use the same Safari session or Home Screen shortcut each time. Clearing site data or using private browsing can remove progress. Data does not sync across devices or different hosting addresses. No student account or real name is required. If browser saving fails, the shop remains usable for the current visit and the interface reports that it is not saved.

## Student iPads

The owner has approved anyone-with-the-link access to the published game. The QR code points to the canonical Sites game URL:

https://retail-showtime-classroom-7k4.abubakarhasyim18.chatgpt.site

Students can open the URL in Safari or scan [the QR code](dist/ipad-qr.png) with the Camera app. In Safari, choose **Share → Add to Home Screen → Add** for a shortcut. The game includes Home Screen icons and a web app manifest; it needs an internet connection to load. The footer has an iPad link/QR sharing panel with a copy-link button.

## Run and host

Serve `dist/` using any static web server, or deploy this repository on Netlify. `netlify.toml` sets the publish folder to `dist`; no build command or application dependencies are needed. `.netlify/` is ignored so local linking state is never committed.

Run checks with:

```sh
node --check dist/app.js
node --check dist/lessons.js
node --check dist/teacher-guide.js
node --check dist/shop-model.js
node --check dist/shop.js
node tests/game.cjs
node tests/shop.cjs
```

Preferences and the virtual shop save only in this browser. The game does not send student names, quiz results or shop progress to a server. No login is built into the game; hosting-level access depends on the provider configuration.

Validation covers question data and source references, the click handlers for all 36 questions, show lengths, retries, hints, scoring, wheel outcomes and audio-control paths. Additional checks cover the persistent wallet, purchases, ownership, furniture placement, themes, storage failures, quiz/shop navigation and stale spin callbacks. The QR code was decoded successfully at three image sizes. Browser layout and audible playback were not verified because managed browser-control tools were unavailable.

Original game inspired by television game shows. Not affiliated with The Price Is Right.
