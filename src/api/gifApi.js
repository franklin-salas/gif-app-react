export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=JN3C6P73yljVwX4N6JYlB78s2H252j7z&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(
        img => ({
            id: img.id,
            title:img.title,
            url: img.images.downsized_medium.url
        })
    );

    return gifs;
}