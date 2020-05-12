# Note-Taking App
### Express

You can access the app here: https://expressnotetaker-jbenj.herokuapp.com/

## Description
This is an application that allows users to write, save, and delete notes. It utilizes an express backend and saves and recalls note data from a JSON file.

If you need help keeping track of important to-dos, brilliant ideas, or appointments, just click "Get Started" and find the clean GUI, which allows you to title your note and add the details of it. Don't forget to click that "Save" icon in the upper-right hand corner of the page. 

## Future Implementation
Future implementations will include 
-further refinement of functionality, especially adding an "Enter" button function that allows the user's note to be saved that way, rather than having to click on the "save" icon
-display properties, including color changes and bringing the "save" and "write note" icons closer to the input areas. 

# HELP!

Here is a video ASAP showing how the app works *perfectly* in the localhost that I've set up, yet suddenly malfunctions after being deployed to Heroku.

### Video Link on Google Drive

https://drive.google.com/file/d/1Zy8LDY5kECwxlBtOTm2xci3h8435Ir_e/view


Specifically, on Heroku, after adding notes and attempting to delete one, *all* of the items get deleted. When adding a new item then, they all return to the sidebar on the left. Click delete on one, they all disappear again, add a new one, they all return, *ad infinitum/nauseum*. Any help with this functionality would be greatly appreciated. Please see the apiRoute file in the Routes folder, specifically code lines 81-96 (I think).

# UPDATE: "HELP!" SOLVED

Essentially, this bit of CRYPTO code was constantly generating new IDs on the local host, but only once when deploying to Heroku. I noticed this while doing a console.log in both scenarios, the former displaying various, random IDs for each item, the latter (i.e., the deployed app in Heroku) displaying the *same* random ID for all items. Tani (see Acknowledgements below) realized that Heroku was only creating *one* random ID, so we moved that bit of code (see the following three images) and got the deployed app working properly. 
 
### Code Image 1

![crypto1](https://user-images.githubusercontent.com/59940368/81623619-0086e380-93c2-11ea-9624-203d9b951698.png)

### Code Image 2

![crypto2](https://user-images.githubusercontent.com/59940368/81623620-0381d400-93c2-11ea-9b50-d8bc34b1f286.png)

### Code Image 3

![crypto3](https://user-images.githubusercontent.com/59940368/81623626-07adf180-93c2-11ea-91b2-5221947bd589.png)

## Built With
Visual Studio Code:
HTML
CSS-Bootstrap
JavaScript
jQuery - Javascript libraries.
Nodejs NPM packages: Express, FS, Nodemon
JSON

## Back-end Testing
Postman

## Contributing
If you wish to contribute ideas to this work-in-progress, feel free to reach out to me in any of the ways listed on my profile's mainpage. Alternatively, feel free to follow me on GitHub, at which time I will certainly follow you back, and express that you'd like to contribute ideas for improvement. 

Please be sure to keep all criticism constructive and avoid using deratory/insulting language. That said, do not shy away from criticizing what I've created so far. I'm always open to learning new things and finding new ways or doing things. 

## Author
Josua Benjamin - jbenj-upenn on github.com.

## Acknowledgments
### Tutor
As always, an enormous "thank you" goes to Meguel Chavez, my personal tutor, without whom I'd still be the personification of the GIF of the monkey banging on a keyboard.

### Teaching and Learning Assistants
Enormous thanks to my bootcamp Teaching Assistant, Artan "Tani" Muzhaqi, and a Learning Assistant named Nathan Perfetti.

### Classmates
Tons of thanks to my classmates for their feedback and guidance: Eric Donovan, Giannis Foster-Sporidis, Joseph Dvorak, Adam Parsons, and Stephen Miller.

## Images

## Front Page
![noteTakingAppFrontPage](https://user-images.githubusercontent.com/59940368/81519355-f8ba3700-930e-11ea-99db-1ae5e7427a90.png)

## Usage
![noteTakingApp1](https://user-images.githubusercontent.com/59940368/81519350-f48e1980-930e-11ea-9890-5b74f06dbbd1.png)

