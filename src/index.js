const msgs = [
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

const randomMsg = () => {
    const msg = msgs[Math.floor(Math.random() * msgs.length)]

    console.log(msg)
}

module.exports = { randomMsg }