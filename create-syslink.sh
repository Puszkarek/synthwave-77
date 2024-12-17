#!/bin/bash
while inotifywait -e modify ./gtk-3.0/gtk.css ./gtk-4.0/gtk.css ./gnome-shell/gnome-shell.css; do
    gsettings set org.gnome.shell disable-user-extensions true
    gsettings set org.gnome.shell disable-user-extensions false
done