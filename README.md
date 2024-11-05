# Sudoku Checker

This project is a modern, interactive Sudoku Validator, designed to allow users to enter a complete Sudoku puzzle and validate its correctness. The interface mimics a game-like Sudoku grid with a clean, attractive look, making it easy and intuitive to use.

## Project Overview

The Sudoku Validator consists of three main files:

- **`index.html`**: The core HTML structure that lays out the Sudoku grid, validation button, and result display.
- **`style.css`**: The CSS file responsible for styling the Sudoku board, making it visually appealing, with clearly defined blocks, rounded corners, and responsive styles.
- **`script.js`**: JavaScript logic to create the grid, collect the user inputs, and validate the correctness of the entire Sudoku puzzle.

## Features

- **Interactive Sudoku Grid**: The interface consists of nine distinct 3x3 sections stacked on top of each other, each containing nine input cells.
- **Modern Design**: The grid has a game-like feel with rounded borders, soft colors, and hover effects to create an enjoyable user experience.
- **Real-Time Validation**: Users can click the "Validate" button after entering their Sudoku puzzle to get immediate feedback on whether the puzzle is valid.
- **Smooth UI Elements**: Focus and hover effects, smooth transitions, and a visually distinct validation button provide an interactive experience.

## How to Use

1. **Clone the Repository**: Clone the repository to your local machine using the following command:

   ```sh
   git clone https://github.com/FidelValenzuela/Sudoku-Checker
   ```

2. **Open the HTML File**: Navigate to the project directory and open the `index.html` file in your preferred web browser.

3. **Input the Puzzle**: Enter the numbers into the Sudoku grid. You can use numbers from 1 to 9 in each cell. The grid is divided into nine stacked 3x3 sections.

4. **Validate the Puzzle**: Once you have filled out the entire Sudoku grid, click the "Validate" button. A message will appear below indicating whether the Sudoku puzzle is valid.

## Project Files

- **`index.html`**: Defines the HTML structure and includes references to the `style.css` and `script.js` files.
- **`style.css`**: Provides the styling for the Sudoku board, including colors, padding, grid layout, button styling, and result messages.
- **`script.js`**: Contains the JavaScript code for dynamically creating the Sudoku grid, retrieving the user inputs, and validating the puzzle.

## Code Structure

- **Grid Generation**: The JavaScript code dynamically generates a 9x9 Sudoku grid by creating 9 separate 3x3 blocks. Each block contains 9 cells for user input.
- **Validation Logic**: The validator checks if each row, column, and 3x3 section contains all the numbers from 1 to 9 exactly once.
- **Result Display**: After clicking the "Validate" button, the JavaScript function displays whether the Sudoku puzzle is valid or invalid, with different colors for better visual distinction.

## Styling

- **Modern Game-Like UI**: The project uses rounded corners, soft background colors, and hover effects to give the interface a polished look.
- **Responsive Layout**: The layout is centered on the page, with flexible sizing to adapt well on different screen sizes.

## Future Improvements

- **Error Highlighting**: Highlight incorrect cells when the puzzle is invalid, helping users identify where the issues are.
- **Partial Validation**: Allow users to partially validate rows or columns while filling out the Sudoku puzzle.
- **Mobile Optimization**: Improve mobile usability by refining the input experience for small touchscreens.

## Requirements

- Any modern web browser (Chrome, Firefox, Safari, Edge).
- Basic knowledge of Sudoku to input a complete puzzle for validation.

## Credits

This project was created as an example of modern web design and JavaScript validation. It showcases how to build an interactive and visually appealing Sudoku validator.

## License

This project is open source and available under the MIT License. Feel free to use and modify it as needed.

---

Thank you for checking out the Sudoku Validator! If you have suggestions or improvements, feel free to contribute or open an issue.

