#!/bin/bash
while inotifywait -e modify ./gtk-3.0/gtk.css ./gtk-4.0/gtk.css ./gnome-shell/gnome-shell.css; do
    # Reload GTK themes by switching back and forth
    current_theme=$(gsettings get org.gnome.desktop.interface gtk-theme)
    gsettings set org.gnome.desktop.interface gtk-theme 'Adwaita'
    gsettings set org.gnome.desktop.interface gtk-theme ${current_theme}
done