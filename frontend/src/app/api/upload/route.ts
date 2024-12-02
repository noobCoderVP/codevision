import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  try {
    // Mock processing of the file
    const mockVisualization = {
      nodes: [
        { id: 1, label: 'Function A' },
        { id: 2, label: 'Function B' },
      ],
      edges: [{ from: 1, to: 2 }],
    };

    return NextResponse.json(mockVisualization);
  } catch (error) {
    console.error('Error processing file:', error);
    return NextResponse.json({ error: 'Error processing file' }, { status: 500 });
  }
}
