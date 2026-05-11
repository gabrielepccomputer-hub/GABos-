#!/bin/bash
sudo lb clean
lb config --architecture amd64 --distribution bookworm --binary-images iso-hybrid
sudo lb build
