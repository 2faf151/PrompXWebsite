import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
        }

        const downloadsPath = path.join(process.cwd(), 'data', 'downloads.json');
        const data = await fs.readFile(downloadsPath, 'utf8');
        const downloads = JSON.parse(data);

        downloads.totalDownloads += 1;
        downloads.emails.push(email);

        await fs.writeFile(downloadsPath, JSON.stringify(downloads, null, 2));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error handling download:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
