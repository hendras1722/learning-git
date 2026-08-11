export async function testFetch21421(name, age) {
    const res = await fetch("https://api.com/posts", {
        method: "POST",
        body: JSON.stringify({
            name,
            age,
            title: "12312421",
            body: "test",
            userId: 1,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    console.log(await res.json());
}

await testFetch21421();