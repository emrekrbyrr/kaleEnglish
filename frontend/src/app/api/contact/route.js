export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message } = payload || {};

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    return Response.json({
      ok: true,
      message: "Contact request received.",
    });
  } catch (error) {
    return Response.json(
      { error: "Unable to process the request." },
      { status: 500 }
    );
  }
}
