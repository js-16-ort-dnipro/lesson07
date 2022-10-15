
    const URL = './tso-data-pb.json';

    let data = await fetch(URL);
        data = await data.json();

    console.log(data);