import { inconsolata } from "../ui/fonts";

export default function Skills() {
  return (
    <main className="flex flex-col items-center pb-8 w-full bg-[radial-gradient(circle_500px_at_50%_500px,#3e3e3e,#1b1a17)] bg-no-repeat lg:h-screen">
      <h1
        className={`${inconsolata.className} text-mark-text2 not-italic text-[32px] font-bold mt-32 mb-8 sm:mt-44 lg:mt-32`}
      >
        My Skills
      </h1>

      <div
        className={`${inconsolata.className} w-full text-white text-2xl not-italic font-medium leading-4  flex items-center justify-center flex-col gap-4 sm:text-[32px] sm:font-bold sm:flex-row sm:flex-wrap max-w-[1200px] sm:px-9`}
      >
        <div className="w-4/5 px-8 py-[14px] bg-[#21201D] flex items-center rounded-[10px] max-w-[360px] sm:flex-col sm:px-10 sm:py-16 sm:w-[200px]">
          <div className="text-white hover:text-red-700 w-7 h-8 flex justify-center items-center sm:w-[80px] sm:h-[100px]">
            <svg
              viewBox="0 0 114 129"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#F0E3CA] hover:fill-[#fc490b]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H113.459L103.058 115.271L57.0445 128.271L10.164 115.271L0 0ZM92.4217 19.3037H21.1948L24.898 61.9296H74.1422L72.724 80.8393L56.8082 85.1728L40.8925 80.8393L39.7894 69.4147H25.6859L27.6556 91.6337L56.8082 99.6703L85.8032 91.5549L89.5852 47.9836H37.8984L36.4802 32.777H91.161L92.4217 19.3037Z"
              />
            </svg>
          </div>
          <p className="ml-4 sm:ml-0 sm:mt-4">HTML5</p>
        </div>

        <div className="w-4/5 px-8 py-[14px] bg-[#21201D] flex items-center rounded-[10px] max-w-[360px] sm:flex-col sm:px-10 sm:py-16 sm:w-[200px]">
          <div className="w-7 h-8 flex justify-center items-center sm:w-[80px] sm:h-[100px]">
            <svg
              viewBox="0 0 29 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#F0E3CA] hover:fill-[#2196f4]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.5 0.790283H28.8047L26.2101 29.547L14.731 32.7903L3.03563 29.547L0.5 0.790283ZM5.76782 6.60846H23.4779L21.8661 24.6723L14.6523 26.6773L7.39927 24.6723L6.86856 19.1687H10.3477L10.5835 21.9795L14.6523 23.0605L18.6032 21.9795L19.0356 17.2817H6.71131L6.37716 13.7633H19.3108L19.6253 10.1072H6.06266L5.76782 6.60846Z"
              />
            </svg>
          </div>
          <p className="ml-4 sm:ml-0 sm:mt-4">CSS3</p>
        </div>

        <div className="w-4/5 px-8 py-[14px] bg-[#21201D] flex items-center rounded-[10px] max-w-[360px] sm:flex-col sm:px-10 sm:py-16 sm:w-[200px]">
          <div className="w-8 h-8 flex justify-center items-center sm:w-[80px] sm:h-[100px]">
            <svg
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#F0E3CA] hover:fill-[#ffdf00]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H128V128H0V0ZM69.4589 58.6666H57.851V101.208C57.851 102.463 56.7843 107.608 51.3883 107.357C45.9922 107.106 43.5451 101.082 43.5451 101.082L33.9451 106.98C33.9451 106.98 39.2785 117.898 50.0079 117.898C60.7373 117.898 69.4589 113.882 69.4589 101.208V58.6666ZM114.384 67.5765C110.35 60.5602 103.782 57.6466 96.9412 58.0392C90.1007 58.4318 80.1254 60.9977 79.8745 74.5412C79.6237 88.0846 96.1255 92.8 96.1255 92.8C103.004 95.6933 106.238 97.4064 106.039 101.333C105.295 106.157 102.086 107.42 97.9451 107.42C93.8039 107.42 89.69 105.561 85.8981 100.141L76.3608 105.663C81.4623 113.734 87.4667 118.023 97.9451 117.961C108.424 117.898 118.4 112.502 118.086 101.333C117.773 90.1647 112.376 87.2225 101.459 82.1333C94.2631 79.3103 92.1098 78.0549 91.7334 74.5412C91.3569 71.0275 93.8039 68.3922 97.3177 68.3922C100.831 68.3922 103.372 70.2755 105.161 73.6L114.384 67.5765Z"
              />
            </svg>
          </div>
          <p className="ml-4 sm:ml-0 sm:mt-4">JavaScript</p>
        </div>

        <div className="w-4/5 px-8 py-[14px] bg-[#21201D] flex items-center rounded-[10px] max-w-[360px] sm:flex-col sm:px-10 sm:py-16 sm:w-[200px]">
          <div className="w-8 h-8 flex justify-center items-center sm:w-[80px] sm:h-[100px]">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
              className="fill-[#F0E3CA] hover:fill-[#3178c6]"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path d="M388 5104 c-185 -44 -329 -189 -373 -376 -22 -95 -22 -4241 0 -4336 45 -189 188 -332 377 -377 55 -13 347 -15 2164 -15 1380 0 2120 3 2155 10 190 36 348 189 394 382 22 95 22 4241 0 4336 -46 193 -204 346 -394 382 -35 7 -773 10 -2160 9 -1759 -1 -2115 -3 -2163 -15z m4022 -2392 c52 -11 118 -29 145 -39 l50 -19 3 -232 c1 -128 0 -232 -3 -232 -3 0 -48 20 -99 45 -314 153 -712 131 -791 -45 -26 -58 -17 -139 21 -188 46 -57 155 -125 309 -193 198 -87 289 -134 373 -192 142 -98 231 -219 268 -367 25 -98 15 -302 -18 -391 -70 -188 -201 -308 -413 -378 -149 -49 -280 -64 -505 -58 -219 5 -344 26 -490 80 l-85 32 -3 257 -2 258 52 -40 c237 -179 604 -242 815 -139 38 18 74 45 90 66 25 32 28 45 28 108 0 63 -4 77 -29 114 -54 77 -147 134 -396 241 -204 88 -289 140 -391 240 -93 92 -135 163 -164 275 -19 76 -19 241 0 323 61 259 296 436 650 491 105 17 476 6 585 -17z m-1440 -227 l0 -205 -320 0 -320 0 0 -915 0 -915 -255 0 -255 0 -2 913 -3 912 -317 3 -318 2 0 205 0 205 895 0 895 0 0 -205z" />
              </g>
            </svg>
          </div>
          <p className="ml-4 sm:ml-0 sm:mt-4">TypeScript</p>
        </div>

        <div className="w-4/5 px-8 py-[14px] bg-[#21201D] flex items-center rounded-[10px] max-w-[360px] sm:flex-col sm:px-10 sm:py-16 sm:w-[200px]">
          <div className="w-8 h-8 flex justify-center items-center sm:w-[80px] sm:h-[100px]">
            <svg
              viewBox="175.7 78 490.6 436.9"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#F0E3CA] hover:fill-[#61dafb]"
            >
              <g>
                <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
                <circle cx="420.9" cy="296.5" r="45.7" />
              </g>
            </svg>
          </div>
          <p className="ml-4 sm:ml-0 sm:mt-4">React</p>
        </div>

        <div className="w-4/5 px-8 py-[14px] bg-[#21201D] flex items-center rounded-[10px] max-w-[360px] sm:flex-col sm:px-10 sm:py-16 sm:w-[200px]">
          <div className="w-8 h-8 flex justify-center items-center sm:w-[80px] sm:h-[100px]">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256.000000 256.000000"
              preserveAspectRatio="xMidYMid meet"
              className="fill-[#F0E3CA] hover:fill-[#ffffff]"
            >
              <g
                transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path d="M1095 2550 c-633 -100 -1095 -635 -1095 -1270 0 -708 572 -1280 1280 -1280 185 0 371 40 536 115 l74 34 -203 274 c-112 151 -321 447 -463 657 l-259 382 -5 -377 c-6 -425 -1 -405 -85 -405 -79 0 -75 -28 -75 542 0 423 2 507 14 517 9 7 39 11 77 9 l64 -3 509 -772 510 -771 60 41 c96 67 236 214 311 326 143 215 215 453 215 711 0 463 -247 887 -652 1116 -94 54 -215 101 -330 130 -84 21 -133 26 -263 29 -88 2 -187 0 -220 -5z m637 -777 c17 -15 18 -43 18 -465 0 -246 -3 -448 -7 -448 -5 1 -41 52 -80 114 l-73 113 0 336 c0 292 2 338 16 351 21 22 102 21 126 -1z" />
              </g>
            </svg>
          </div>
          <p className="ml-4 sm:ml-0 sm:mt-4">Nextjs</p>
        </div>

        <div className="w-4/5 px-8 py-[14px] bg-[#21201D] flex items-center rounded-[10px] max-w-[360px] sm:flex-col sm:px-10 sm:py-16 sm:w-[200px]">
          <div className="w-8 h-8 flex justify-center items-center sm:w-[80px] sm:h-[100px]">
            <svg
              viewBox=".15 .13 799.7 479.69"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#F0E3CA] hover:fill-[#06b6d4]"
            >
              <path d="m400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09-39.2-39.78-84.58-85.82-183.68-85.82zm-199.93 239.84c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z" />
            </svg>
          </div>
          <p className="ml-4 sm:ml-0 sm:mt-4">tailwindcss</p>
        </div>

        <div className="w-4/5 px-8 py-[14px] bg-[#21201D] flex items-center rounded-[10px] max-w-[360px] sm:flex-col sm:px-10 sm:py-16 sm:w-[200px]">
          <div className="w-8 h-8 flex justify-center items-center sm:w-[80px] sm:h-[100px]">
            <svg
              viewBox="0 0 129 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#F0E3CA] hover:fill-[#f25234]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17 0C7.6112 0 3.72467e-05 7.61116 3.72467e-05 17V33.1551H0V44.0195H3.72467e-05V64V111C3.72467e-05 120.389 7.6112 128 17 128H64.2498H111.5C120.888 128 128.5 120.389 128.5 111V64V17C128.5 7.61116 120.888 0 111.5 0H64.2498H17ZM3.72467e-05 44.0195H27.5528C29.5255 48.8193 34.2471 52.199 39.758 52.199C41.5519 52.199 43.2622 51.8409 44.8212 51.1923L78.3283 84.6994C77.6855 86.2525 77.3307 87.9551 77.3307 89.7405C77.3307 97.0253 83.2362 102.931 90.521 102.931C97.8058 102.931 103.711 97.0253 103.711 89.7405C103.711 82.4557 97.8058 76.5502 90.521 76.5502C89.0264 76.5502 87.5898 76.7988 86.2504 77.2569L53.013 44.0195H78.3782C80.3509 48.8193 85.0725 52.199 90.5834 52.199C97.8682 52.199 103.774 46.2936 103.774 39.0088C103.774 31.724 97.8682 25.8185 90.5834 25.8185C85.401 25.8185 80.9167 28.8073 78.76 33.1551H51.5815C49.4248 28.8073 44.9404 25.8185 39.758 25.8185C34.5756 25.8185 30.0913 28.8073 27.9346 33.1551H3.72467e-05V44.0195Z"
              />
            </svg>
          </div>
          <p className="ml-4 sm:ml-0 sm:mt-4">Git</p>
        </div>
      </div>
    </main>
  );
}
