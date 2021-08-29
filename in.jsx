import { setChonkyDefaults, FullFileBrowser } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';
let React = require('react')
let ReactDOM = require('react-dom');
// Somewhere in your `index.ts`:
setChonkyDefaults({ iconComponent: ChonkyIconFA });
export const MyFileBrowser = () => {
    const files = [
        { id: 'lht', name: 'Projects', isDir: true },
        {
            id: 'mcd',
            name: 'chonky-sphere-v2.png',
            thumbnailUrl: 'https://chonky.io/chonky-sphere-v2.png',
        },
    ];
    const folderChain = [{ id: 'xcv', name: 'Demo', isDir: true }];
    return (
        <div style={{ height: 300 }}>
            <FullFileBrowser files={files} folderChain={folderChain} />
        </div>
    );
};
ReactDOM.render(MyFileBrowser(), document.getElementById("app"));
