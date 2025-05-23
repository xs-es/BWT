# Professional Base Website Template

A professional, advanced, and flexible base website template designed to serve as a foundation for quickly creating new websites by applying different themes.

## Features

- **Modular CSS Structure**: Organized into separate files for easy maintenance and customization
- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Customizable Themes**: Easy to modify variables in the theme.css file to create new themes
- **Modern Components**: Includes all essential UI components for a professional website
- **Performance Optimized**: Built with performance best practices
- **Accessibility Ready**: Designed with accessibility in mind
- **SEO Friendly**: Proper semantic HTML structure for better search engine visibility
- **Clean Code**: Well-structured and commented code for easy understanding

## File Structure

```
BASE/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   ├── normalize.css   # CSS reset/normalize
│   │   ├── base.css        # Base styles and variables
│   │   ├── layout.css      # Layout components and grid system
│   │   ├── components.css  # UI components
│   │   ├── utilities.css   # Utility classes
│   │   └── theme.css       # Theme-specific styles
│   ├── js/
│   │   └── main.js         # Main JavaScript file
│   └── images/
│       └── logo.svg        # Logo placeholder
└── README.md               # This file
```

## How to Use

### Basic Usage

1. Copy the entire `BASE` directory to start a new project
2. Modify the content in `index.html` to match your project needs
3. Customize the theme by editing variables in `assets/css/theme.css`

### Creating a New Theme

1. Open `assets/css/theme.css`
2. Modify the CSS variables in the `:root` selector to change colors, fonts, etc.
3. Alternatively, uncomment one of the pre-defined themes at the bottom of the file

### Adding New Pages

1. Copy the `index.html` file and rename it (e.g., `about.html`, `contact.html`)
2. Maintain the header and footer sections for consistency
3. Replace the main content with your page-specific content

## Customization Options

### Colors

The color scheme can be customized by modifying the color variables in `theme.css`:

```css
:root {
  --theme-primary: #4a6cf7;            /* Main brand color */
  --theme-secondary: #f97316;          /* Secondary accent color */
  /* ... other color variables ... */
}
```

### Typography

Font families and sizes can be customized in `base.css` and `theme.css`:

```css
:root {
  --theme-font-primary: 'Inter', sans-serif;
  --theme-font-secondary: 'Playfair Display', serif;
  /* ... other typography variables ... */
}
```

### Components

All UI components are styled in `components.css`. You can modify these styles to match your design requirements.

### Layout

The grid system and layout components are defined in `layout.css`. You can adjust these to create different layouts.

## Browser Support

This template is designed to work in all modern browsers:

- Chrome
- Firefox
- Safari
- Edge
- Opera

## License

Feel free to use this template for both personal and commercial projects.

## Credits

- Fonts: [Google Fonts](https://fonts.google.com/)
- Icons: [Font Awesome](https://fontawesome.com/)
- Normalize.css: [necolas/normalize.css](https://github.com/necolas/normalize.css)
