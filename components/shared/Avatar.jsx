import Image from 'next/image';
function Avatar({ src, width = '30', height = '30' }) {
    if (src === '') {
        src = '/assets/noavatar.png';
    }
    return (
        <Image
            src={src}
            alt='me'
            width={width}
            height={height}
            className='m-2 rounded-full'
            //   placeholder="blur"
        />
    );
}

export default Avatar;
