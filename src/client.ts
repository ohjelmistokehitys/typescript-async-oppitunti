async function getHello() {
    let start = new Date();
    try {
        let res = await fetch('http://localhost:3000');
        let text = await res.text();

        let duration = new Date().getTime() - start.getTime();
        console.log(`Got "${text} in ${duration} ms`);
    } catch (e) {
        console.error(e?.toString());
    }
}

setInterval(getHello, 1_000);