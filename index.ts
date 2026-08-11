export async function testFetch() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "test",
            body: "test",
            userId: 1,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    console.log(await res.json());
}

await testFetch();