let counter = 0;

async function getHello() {
    let i = ++counter;

    let start = new Date();
    try {
        console.log(`${i}: Requesting /`);

        let res = await fetch('http://localhost:3000');
        let text = await res.text();

        let duration = new Date().getTime() - start.getTime();
        console.log(`${i}: Got "${text} in ${duration} ms`);
    } catch (e) {
        console.error(i, e?.toString());
    }
}

setInterval(getHello, 1_000);