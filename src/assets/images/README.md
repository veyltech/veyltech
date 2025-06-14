# Logo Replacement Instructions

## How to Replace the Logo

1. Replace the `logo.svg` file in this directory with your own SVG logo
2. Make sure your file is named `logo.svg` or update the import in the Navbar component if using a different name
3. Uncomment the import line and the img tag in `src/components/Navbar.jsx`

## Steps to Enable SVG Logo

1. Open `src/components/Navbar.jsx`
2. Uncomment this line at the top:
   ```
   import Logo from '../assets/images/logo.svg';
   ```
3. In the same file, find the navbar-logo section and uncomment the img tag:
   ```
   <Link to="/" className="navbar-logo">
     <img src={Logo} alt="VEYLTECH Logo" className="logo-img" />
   </Link>
   ```
4. Delete or comment out the text "VEYLTECH" that was there before

## Adjusting Logo Size

If you need to adjust the size of your logo, modify the CSS in `src/styles/main.css`:

```css
.logo-img {
  height: 40px; /* Adjust this value to resize your logo */
  width: auto;
  max-width: 100%;
}
``` 