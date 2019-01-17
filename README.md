# Wemo Server for Raspberry Pi Zero W

## Setup

Install CEC utils for HDMI controls

```
sudo apt-get update
sudo apt-get install cec-utils
```

Install node.js 8.11.1 via nvm

```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
nvm install 8.11.1
```

Install switchmate library

```
npm i -g node-switchmate3
```

Setup init script

```
sudo cp wemo-initd-script /etc/init.d/wemo
sudo chmod +x /etc/init.d/wemo
sudo update-rc.d wemo defaults
```
