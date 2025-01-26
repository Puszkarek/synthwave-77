# TODOS

- [ ] Discord
- [ ] Gnome Themes
  - [ ] Authentication
  - [ ] Gnome Shell
    - [ ] Modify svg icons
  - [ ] GTK 3
    - #2c0049
  - [ ] GTK 4
- [ ] Check https://github.com/ExposedCat/stunning-gnome-de

# Manual Steps

- Install Pop OS
- Go to Settings > Desktop > Dock and disable it
- Go to Tweaks > Appearance > Themes and change the theme and shell theme to it
  - May need to install https://extensions.gnome.org/extension/19/user-themes/
- Go to Extensions and disable the Cosmic Workspaces
- Set the background and text color in the terminal
- Zen
  - move the `userChrome.css` to `/home/$USER/.var/app/io.github.zen_browser.zen/.zen/3dt4pgkk.Default (beta)/chrome/userChrome.css`
- Change the Tile windows hint color to `#e100ff`
- Run `ln -sf "$(pwd)/gtk-4.0/gtk.css" ~/.config/gtk-4.0/gtk.css`
- Install `https://extensions.gnome.org/extension/5237/rounded-window-corners/`
  - Set the radius to 0 and the border width to 1 with the accent color to `#e100ff`
- Setup the fonts
  - Install the fonts
  - Set it to use in the:
    - VSCode
    ```
      "editor.fontFamily": "Share Tech Mono",
      "terminal.integrated.fontFamily": "Share Tech Mono",
      "editor.codeLensFontFamily": "Share Tech Mono",
    ```
    - Gnome Tweaks
    - Terminal

## Dependencies

### Profile Pictures

- [Noun Project](https://thenounproject.com/browse/icons/term/cyberpunk/?qv=4334514)

### Fonts

- [Main - Refinery](https://ifonts.xyz/refinery-font.html)
- [Mono - Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono)

### VSCode

1. Install this [VSCode Theme](https://marketplace.visualstudio.com/items?itemName=Puszkarek.midnight-mirage-theme) - Use the secondary theme that comes from this package
2. Remove the icons from the editor to give a more minimalistic look

### Discord

- Install [Better Discord](https://betterdiscord.app/)
- Copy the CSS from `./discord/discord.css` and paste it into the `Better Discord` settings

### Slack

- TODO

### Spotify

- TODO

### Tidal

- TODO

### Zen Browser Theme

- TODO
- TODO: Create an extension that dynamically converts any website theme to our theme

## System

### Icons

- TODO

### Sound

- TODO

#### Alternative fonts (Might not be so good for long reading)

- [Blender Pro](https://en.bestfonts.pro/font/blender-pro)
- [Orbitron](https://www.theleagueofmoveabletype.com/orbitron?style=medium)
- [Purista](https://www.suitcasetype.com/fonts/purista)

### Wallpapers Suggestions

- https://www.reddit.com/r/WidescreenWallpaper/comments/e5i6v0/samura%C3%AF_ui_cyberpunk_2077_34401440_just_a/#lightbox
- https://www.wallpaperflare.com/cyberpunk-cyberpunk-2077-binary-red-cd-projekt-red-samurai-wallpaper-udgbz
- https://www.wallpaperflare.com/cyberpunk-2077-cd-projekt-red-video-games-logotype-wallpaper-gjmik

# Inspiration

- https://www.behance.net/gallery/118663901/Cyberpunk-2077User-Interface-(Part-1)
- https://github.com/refact0r/system24?tab=readme-ov-fileS
- https://github.com/spicetify
- https://www.reddit.com/r/unixporn/comments/18oryzo/waylandswallpaper

# Developer Resources

- https://developer.gnome.org/hig/
- https://developer.gnome.org/hig/resources.html
- https://looking-glass.io/
- https://stackoverflow.com/questions/49348833/looking-for-a-manual-for-gnome3-shell-css-entries
- https://docs.gtk.org/gtk4/running.html#interactive-debugging
- https://github.com/themix-project/themix-gui
