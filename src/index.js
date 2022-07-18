const names = [
    'Manuma',
    'Demi Lovato',
    'Miley Cyrus',
    'Madonna',
    'Michael Jackson',
    'Belinda',
    'Rihanna',
    'Donald Trump',
    'Emma Watson',
    'Daniel Radcliffe',
    'Nicole Kidman',
    'Bruce Willis',
    'Robert Pattinson',
    'Gustavo Petro',
    'Hugo Rafael Chavez',
    'Che Guevara',
    'Angela Merkel',
    'Wiston Churchill',
    'Frida Kahlo',
    'Sigmund Freud',
]

const randomNames = () => {
    const name = names[Math.floor(Math.random() * names.length)]

    console.log(name)
}

module.exports = { randoNames }