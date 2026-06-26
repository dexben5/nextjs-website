export default function handler(req, res) {
    res.status(200).json({ text: 'Hello!' });
}

export async function fetchPosts() {
    const repsonse = await fetch('API EXAMPLE.COM');
    const data = await response.json();
    return data;
}