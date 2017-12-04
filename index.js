
import { NativeModules,DeviceEventEmitter } from 'react-native';

const { RNUpnp } = NativeModules;

const UPNP = {}

UPNP.testPing = () => {
    RNUpnp.ping();
};

UPNP.loadSongs = () => {
    RNUpnp.loadSongs();
};

UPNP.initUPNP = () => {
    RNUpnp.initUPNP();
};

UPNP.pause = () => {
    RNUpnp.onPause();
};

UPNP.refresh = () => {
    RNUpnp.refresh();
};

UPNP.destroy = () => {
    RNUpnp.onDestroy();
};

UPNP.songSelected = (callback) => {
    return DeviceEventEmitter.addListener('song_item', callback);
};

UPNP.receivedSpeakers = (callback) => {
    return DeviceEventEmitter.addListener('speaker-found', callback);
};

export default UPNP;
