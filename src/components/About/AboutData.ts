export interface Interest {
    icon: string;
    label: string;
}

export interface PersonalData {
    birthDate: string;
    phone: string;
    email: string;
    website: string;
    address: string;
    role: string;
}

export const personalData: PersonalData = {
    birthDate: '11-03-2004',
    phone: '+57 3005450866',
    email: 'zerepjosxd@gmail.com',
    website: 'https://my-portfolio-dev-jose-luis.vercel.app/#skills',
    address: 'Maicao, La Guajira, Colombia',
    role: 'Full Stack Developer',
};

export const interests: Interest[] = [
    { icon: '🎮', label: 'Juegos' },
    { icon: '🎵', label: 'Música' },
    { icon: '✈️', label: 'Viajar' },
    { icon: '⛹️', label: 'Deporte' },
    { icon: '🚗', label: 'Autos' },
];
