type FlowerProps = {
    w: number;
    h: number;
    petalColor?: string;
    centerColor?: string;
  };
  
  export default function Flower({
    w,
    h,
    petalColor = 'bg-pink-400',
    centerColor = 'bg-yellow-400',
  }: FlowerProps) {
    const centerSize = 0.3 * Math.min(w, h);
    const petalSize = 0.45 * Math.min(w, h);
  
    const petalStyle = {
      width: `${petalSize}px`,
      height: `${petalSize}px`,
    };
  
    return (
      <div
        className="relative mx-auto my-10"
        style={{ width: `${w}px`, height: `${h}px` }}
      >
        {/* Center circle */}
        <div
          className={`absolute rounded-full z-10 ${centerColor}`}
          style={{
            width: `${centerSize}px`,
            height: `${centerSize}px`,
            top: `calc(50% - ${centerSize / 2}px)`,
            left: `calc(50% - ${centerSize / 2}px)`,
          }}
        ></div>
  
        {/* Top petal */}
        <div
          className={`absolute rounded-full ${petalColor}`}
          style={{
            ...petalStyle,
            top: 0,
            left: `calc(50% - ${petalSize / 2}px)`,
          }}
        ></div>
  
        {/* Right petal */}
        <div
          className={`absolute rounded-full ${petalColor}`}
          style={{
            ...petalStyle,
            top: `calc(50% - ${petalSize / 2}px)`,
            right: 0,
          }}
        ></div>
  
        {/* Bottom petal */}
        <div
          className={`absolute rounded-full ${petalColor}`}
          style={{
            ...petalStyle,
            bottom: 0,
            left: `calc(50% - ${petalSize / 2}px)`,
          }}
        ></div>
  
        {/* Left petal */}
        <div
          className={`absolute rounded-full ${petalColor}`}
          style={{
            ...petalStyle,
            top: `calc(50% - ${petalSize / 2}px)`,
            left: 0,
          }}
        ></div>
      </div>
    );
  }
  

  {/* Decorative Flowers - hidden on mobile */}
          
          {/* <div className="absolute top-[-40px] left-[-230px] pointer-events-none animate-spin hidden md:block">
            <Flower w={180} h={180} petalColor="bg-blue-400" centerColor="bg-orange-300" />
          </div>

          <div className="absolute bottom-[-80px] right-[-350px] pointer-events-none animate-spin hidden md:block">
            <Flower w={160} h={160} />
          </div>

          <div className="absolute bottom-[240px] left-[-160px] pointer-events-none animate-spin hidden md:block">
            <Flower w={150} h={150} petalColor="bg-red-500" centerColor="bg-white" />
          </div>

          <div className="absolute top-[120px] right-[-320px] pointer-events-none animate-spin hidden md:block">
            <Flower w={300} h={300} petalColor="bg-orange-500" centerColor="bg-white" />
          </div>

          <div className="absolute bottom-[-90px] left-[-220px] -translate-x-1/2 pointer-events-none animate-spin hidden md:block">
            <Flower w={250} h={250} petalColor="bg-purple-500" centerColor="bg-white" />
          </div> */}