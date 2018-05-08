for (let i = 2; i < process.argv.length; i++) {
    setTimeout(() => {
        console.log(parseInt(process.argv[i]))
    }, process.argv[i] * 1000)
}