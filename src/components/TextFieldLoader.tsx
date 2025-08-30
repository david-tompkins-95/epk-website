'use client';

import { useEffect, useState } from 'react';
import styles from '../css/EpkContent.module.css'

export default function TextFieldLoader() {
    const [text, setText] = useState<string>('');

    useEffect(() => {
        async function loadFile() {
            try {
                const response = await fetch('/text/bio.txt');
                if (!response.ok) {
                    throw new Error('Failed to fetch file');
                }
                const fileContent = await response.text();
                setText(fileContent); // Update state with file content
            } catch (error) {
                console.error('Error fetching file:', error);
                setText('Failed to load file.');
            }
        }

        loadFile();
    }, []);

    return (
        <textarea className={styles.textArea}
            rows={10}
            cols={140}
            value={text}
            readOnly={true}
            onChange={(e) => setText(e.target.value)}
            placeholder="File content will load here..."
        />
    );
}