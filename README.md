<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<!-- 
*** Markdown "reference style" links for readability: https://www.markdownguide.org/basic-syntax/#reference-style-links
*** Open-source, real-time, in-browser Markdown editor: https://stackedit.io/
 -->

<a name="readme-top"></a>

<!-- Project Shields -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/chenweida6220/csci-49900-writevibe">
    <img src="public/images/WriteVibe.png" alt="Logo" width="auto" height="80">
    <img src="public/images/icon.png" alt="Logo" width="80" height="80">
  </a>

  <p align="center">
    WriteVibe is the place to go if you're sick and tired of your boring writing applications... you know which ones I'm talking about. Enojoy a full suite of text formatting options as well as complete writing enviroment control!
    <br />
    <a href="https://github.com/chenweida6220/csci-49900-the-most-fun-writing-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/chenweida6220/csci-49900-writevibe">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
**Table of Contents**
1. [About The Project](#about-the-project)
2. [Built With](#built-with)
3. [Installing and Running](#installing-and-running)
4. [Roadmap](#roadmap)
5. [License](#license)
6. [Contact](#contact)
7. [Acknowledgments](#acknowledgments)



<!-- ABOUT THE PROJECT -->
## About The Project
<div align="center">
    <img src="public/images/CapstoneDemo_trimmed.gif" alt="WriteVibe Demo" width="80%">
</div>

This web application is designed to serve a specific demographic, namely individuals within the neurodivergent spectrum, particularly those diagnosed with Attention-Deficit/Hyperactivity Disorder (ADHD), who frequently struggle to maintain focus during mundane or unstimulating tasks. While individuals categorized as neurotypical can generally concentrate sufficiently on tasks at hand, those within the neurodivergent spectrum may necessitate additional stimuli to initiate and maintain focus. The primary objective of this web application is to provide tailored cognitive stimulation, particularly applicable to prolonged writing activities. thereby ensuring sustained engagement among individuals with ADHD. Beyond addressing the challenges associated with ADHD, the application’s functionality extends to a broader user base seeking enhanced levels of customization, personalization, and overall enjoyment in their writing endeavors. In doing so, it surpasses the capabilities offered by conventional word processors like Microsoft Word and Google Docs.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With
* [![ReactJs][React.dev]](https://react.dev/)
* [![Material UI][Material UI]](https://shields.io/badge/materialui-white?logo=mui&style=for-the-badge)
* QuillJS
* ConvertAPI
* [![HTML][HTML]](https://img.shields.io/badge/HTML-3c3434?logo=html5)
* [![CSS][CSS]](https://img.shields.io/badge/CSS-3c3434?logo=css3)
* [![JavaScript][JavaScript]](https://img.shields.io/badge/JavaScript-3c3434?logo=javascript)

<details>
<summary>Packages</summary>
    <ol>
        <li>@mui/icons-material: ^5.15.14</a></li>
        <li>@mui/material: ^5.15.13</a></li>
        <li>@testing-library/jest-dom: ^5.17.0</a></li>
        <li>@testing-library/react: ^13.4.0</a></li>
        <li>@testing-library/user-event: ^13.5.0</a></li>
        <li>convertapi-js: ~1.1</a></li>
        <li>file-saver: ^2.0.5</a></li>
        <li>notistack: ^3.0.1</a></li>
        <li>path-browserify: ^1.0.1</a></li>
        <li>quill-to-pdf: ^1.0.7</a></li>
        <li>quill-to-word: ^1.3.0</a></li>
        <li>react: ^18.2.0</a></li>
        <li>react-confetti-explosion: ^2.1.2</a></li>
        <li>react-dom: ^18.2.0</a></li>
        <li>react-full-screen: ^1.1.1</a></li>
        <li>react-quill: ^2.0.012</a></li>
    </ol>

</details>


<!-- GETTING STARTED -->
## Installing and Running

1. Clone the repo
   ```sh
   git clone https://github.com/chenweida6220/csci-49900-writevibe
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Install ConvertAPI
    ```sh
   npm i convertapi-js@~1.1
   ```
4. Deploy the application
    ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Core Writing Features
    - [x] Text Input
        - [x] Ability to add text by typing.
        - [x] Real-time display of characters as they are typed.
    - [x] Text Deletion
        - [x] Ability to delete text using backspace/delete key.
        - [x] Continuous deletion when the backspace/delete is held down.
    - [x] Basic Formatting
        - [x] Bold, Italics, Underline.
        - [x] Apply multiple formatting styles (e.g., bold and underlined).
        - [x] Change font style/type from dropdown menu.
        - [x] Apply font size from a dropdown menu.
        - [x] Apply changes to all text or selected text.
        - [x] Change text color from a selection in a dropdown menu.
        - [x] Apply color changes to all text or selected text.
        - [x] Highlight text using different colors.
        - [x] Indent text using the tab key.
        - [x] Create bullet and numbered lists with one-tab spacing.
        - [x] Adjust line spacing (single, 1.5 lines, double).
- [x] Embedding Images
    - [x] Embed images in JPEG, JPG, PNG, BMP formats.
    - [x] Paste images from import file.
- [x] Settings Customization
    - [x] Open existing files and save as a new file.
    - [x] Change themes
        - [x] Themes
            - [x] Choose from a variety of animated themes.
            - [x] Themes with preset music and ambient sounds.
            - [x] Change background color or set a background image.
            - [x] Change page color.
            - [x] Set custom sounds for typing, word count goals, and ambient writing sounds.
    - [x] Adjust various settings from a settings overlay menu.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Copyright (c) 2024 WriteVibe Creators

Permission is hereby granted, free of charge, to any awesome person obtaining a copy
of this software and associated documentation files (the "Software"), to vibe with
the Software without restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this groovy permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

* Amy Ta - <amy.ta59@myhunter.cuny.edu>
* Daniel Maxime - <daniel.maxime32@myhunter.cuny.edu>
* Uriel Trejo - <uriel.trejo71@myhunter.cuny.edu>
* Wei Da Chen - <weida.chen27@myhunter.cuny.edu>

Project Link: https://github.com/chenweida6220/csci-49900-writevibe

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Amy Ta](https://github.com/redfumo)
* [Daniel Maxime](https://github.com/Danmaxime)
* [Uriel Trejo](https://github.com/Utrejo1125)
* [Wei Da Chen](https://github.com/chenweida6220)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/chenweida6220/csci-49900-the-most-fun-writing-app.svg?style=for-the-badge
[contributors-url]: https://github.com/chenweida6220/csci-49900-the-most-fun-writing-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/chenweida6220/csci-49900-the-most-fun-writing-app.svg?style=for-the-badge
[forks-url]: https://github.com/chenweida6220/csci-49900-the-most-fun-writing-app/network/members
[stars-shield]: https://img.shields.io/github/stars/chenweida6220/csci-49900-the-most-fun-writing-app.svg?style=for-the-badge
[stars-url]: https://github.com/chenweida6220/csci-49900-the-most-fun-writing-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/chenweida6220/csci-49900-the-most-fun-writing-app.svg?style=for-the-badge
[issues-url]: https://github.com/chenweida6220/csci-49900-the-most-fun-writing-app/issues

[React.dev]: https://shields.io/badge/react-black?logo=react&style=for-the-badge
[Quill.js]: https://shields.io/badge/quilljs-grey?logo=javascript&style=for-the-badge
[Material UI]: https://shields.io/badge/materialui-white?logo=mui&style=for-the-badge
[HTML]: https://img.shields.io/badge/HTML-3c3434?logo=html5
[CSS]: https://img.shields.io/badge/CSS-3c3434?logo=css3
[JavaScript]: https://img.shields.io/badge/JavaScript-3c3434?logo=javascript
