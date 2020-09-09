import React from "react"
import styled from "styled-components"

const Map = ({ className, props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="414"
      height="389"
      fill="none"
      viewBox="0 0 414 389"
      className={className}
      {...props}
    >
      <g fill="#B6BAC0" fillRule="evenodd" clipRule="evenodd">
        <path
          id="zachodniopomorskie"
          stroke="#F9F9F9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.25"
          d="M121.733 72.075l-.776-1.642-.945-1.357-1.15-1.029-1.552-3.13-.982-1.175-1.743-1.262-.014-3.809-.322-3.83-2.6-7.917 5.705-1.408.651-1-.161-1.736-.769-1.073-.454-1.014.3-1.24 1.084-1.117.432-1.875-.293-3.35-1.266-2.582-3.369-4.874-2.849-5.736-.08-.153-.279.11-8.553 1.262-2.79 1.744-1.42 1.423-.843 1.678.608-.584.534-.219.235.292-.257.941-.527.606-.659.255-.41-.175.22-.686v-.43L91.7 32.075l-1.736 2.992.6-.605.36-.438.812.029.484 1.014-.528.613-1.435.671-.571.686-.645.263-.747.153-.373.139.359-.526.915-.956.513-1.043-2.527 2.977-1.699 1.11-1.406.692 2.226-.7.945.051-.08 1.124.139.102.073-.022.044.058.022.343H85.49v.518h.286v.43l-3.61.636-.886-.635 2.028-.905.513-.525-4.526 1.517-6.598.825-7.938 3.597-8.078 2.174-7.374 1.97-11.388 4.809-9.337 2.444-10.83 4.809-2.937 2.167-1.59.846-1.625.336-4.05-.336-1.252-.474-.447-.372-.674-.307-.695 1.868-.337.226-.396.117.718.883.33 1.08.095-.015.96.438 1.97 2.853.68.452.484.08.644.336.388.059.527-.11.037-.138-.564-.227v-.467l.586-.058.557-.182 1.113-.708.373.277.52-.24.425-.614.08-.839-.344-.445-.666-.299-1.223-.24.351-.453.271-.445.278-.343.36-.139.49.132.344.19.322-.103.403-.693.073.263.015.058.037.015.132.138-.52 1.35.637.708 4.54.474.974.547.564 1.175-.256.248-.374.496-.205.197.212.358.235.255.285.183.36.153-.257-.474.981-.985.315-.548.103-.831h.278l-.132 1.306-.285 1.233-.147 1.386.286 1.744-.638.03-.446.262-.403.117-.469-.409L19.15 79l-.27 1.517 1.273 3.058.469.248 1.047.094.44.132-.037.401.007.27.03.263-.564.445-.345.416-.183.642-.05 1.102-.213.204-.476-.613-1.34-2.583-.623-.89-.769-.599-2.197-.787-1.801-.307-.454-.38-.82-.882-1.113-.533-.579-.445-.483-1.335-.506-.38-.57-.284-.404-.358-.227.511.396.233.132.234-.132.24-.396.234.718.504-.051.561-.542.504-.74.314-.395.05-.008.008.052 1.934-.169 1.072.623 1.343.857 2.67.073.679-.11 2.517.03 1.518.3 1.415.995 1.54.425 1.43.857 1.445.425 3.546.864 3.984.27 1.284.067.576.022 1.234.131.671.25.438.622.525.161.387.535.489-1.07 2.101-.3.452-.432.227-.403.612-.293.832-.11.905.147 1.102.242.963.088.985-1.23 3.845-.11.569-.55 1.226-1.26 1.314-2.409 1.926-2.49 1.299-1.984 1.474v.423l.249.678.498 2.401.095.846-.168 1.277-.425.817-1.091.942.468.955.718.555.857.27.908.066.82.364 1.333 1.577 1.12.598 4.35 3.203.63.744 1.406 2.766.425.408.776.365 1.18 1.605 2.445.971 2.38 2.67.996-3.59.9-1.342 3.48-.555 2.072-.875 3.207-4.51 2.6-5.698 4.006-2.211 6.796 2.255 2.167-.307 2.512-2.918 1.56-2.948-1.12-.19-.813-1.102 2.314-.124 6.935-2.378 8.436.029 2.065-1.511 3.677-4.691 2.145-1.7 2.226-.307 2.058.453 1.077 3.327-.747 3.218 2.263.751 2.504 1.496 2.556-.35 2.512-.978 3.947-3.729 3.317-5.195 5.925-3.458 3.017-.934 1.186-1.124.96-1.707 1.259-1.554-.256-1.963-1.282-1.635-1.516-.795-3.09-.788-2.57-2.488-.63-2.437-.044-2.73.923-1.305 7.535.197 1.23-.24 1.048-4.371.791-2.255 1.076-1.875 1.465-.65 1.56-.043 1.53.488-.718-7.464 1.714-1.751 1.216-2.153-.454-1.459-.711-1.175-.82-.394-.044-1.357 2.051-.963 2.27.3z"
        ></path>
        <path
          className="area"
          id="swietokrzyskie"
          stroke="#F9F9F9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.25"
          d="M317.774 273.014l-.132-.875-.205-1.387-1.04-3.954-.073-.606-.095-.226-.191-.117-.183-.168-.095-.372.051-.401.103-.19.109-.124.044-.204.301-2.802-.125-1.262-.761-.562v-.445l.293-.059.358-.167.323-.278.168-.379-.161-.876-13.094 2.715-6.774-2.116-3.149-.27-2.797-1.817-.264-.985-.176-1.08-1.223-1.379-.344-2.189-1.237-.423-1.282 1.211-1.201 1.678-1.355.766-5.69.912-4.95-1.029-1.055-.795-.864-1.379-.952-1.087-6.737-4.13-1.216-3.072-2.263-.81-1.171.876-1.502 3.707-1.362.627-1.362.212-1.296.634-2.841 2.693-1.319.379-4.525-.635-1.275.467-1.003 1.321-1.018 3.918 1.868 2.831 1.267 1.007.395 2.167-.322 2.116-.93 1.102-5.405-3.955-1.45.263-.527 2.087-.029 2.065.168 2.043-.696 1.941-1.42.948-1.187 1.102-.952 1.591 3.508.678.513.278.146.722.015.795-.198.511-2.805.46-1.537 2.911 1.12 1.335 3.083.883 1.413 1.08 1.143 2.539 1.948 2.364-1.648.248-2.819 2.372-.821 1.78 1.436.744 2.783.416 1.149.453 3.86.007 1.603.861 1.384 1.445 3.435 1.08 3.149 2.101 1.867 3.692.696 2.941.703 1.488 1.86 2.605.769 1.634 3.01 1.803 5.375.145 1.23-1.306.162-.671.505-.788 1.318-.635.571-.554.117-.336.052-.678.139-.314.168-.117.366-.022.139-.08.865-.868.256-1.095.271-.394 1.567 1.489.674-.314.556-.584.542-.35.63.416.557-.365 1.12-.109.381-.219.403-.533.344-.299.417-.161 3.039-.102.623-.168.454-.386.381-.431.388-.321 1.684-.81.41-.102.608.241.359.474.403.35.725-.153v-.102l.71-1.007.293-.219.22-.015.153-.124.044-.539.22-.336.476-.241.483-.438.22-.904.381.321.278.014.461-.335.044-.197-.044-.314-.022-.278.162-.131.585.051.14-.051 2.511-2.181.769.342 1.04-.226 1.047-.613.777-.817-.396-1.014-.161-.299 3.911-1.751 2.629-.679.747-.635 1.259-1.51.513-1 .212-1.233.293-1.007 1.941-2.306 1.172-1.955.703-.503 1.076-.176.732-.394.623-.948.483-1.153.293-1.022.337-2.539-.051-2.386z"
        ></path>
        <path
          className="area"
          id="slaskie"
          stroke="#F9F9F9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.25"
          d="M240.646 295.743l-.271-1.386-1.149-.453-2.783-.416-1.436-.744.821-1.78 2.819-2.372 1.648-.248-1.948-2.364-1.143-2.539-1.413-1.08-3.083-.883-1.12-1.335 1.537-2.911 2.805-.46.198-.511-.015-.795-.146-.722-.513-.278-3.508-.678-4.445-2.262-4.101.219-1.384-.416-3.823-6.078-2.46-2.262-2.754-.511-1.413 1.226-3.266.015-2.651-.548-5.353-2.889-1.253-1.277-1.442-.285-1.296.898-1.333.627-5.786.19-2.05 1.007-1.413 4.976-.513.613-.308 1 .257 1.466.549 1.197-.293 2.291-3.2 2.058-1.099 2.305-.725 4.035-.974 2.627.791 2.445 1.084 1.473 1.326 1.015 1.31 1.408.462 2.306-5.947-.059-1.193.285-.542 1.452.454 1.131-.081 1.145-.9.423-.879.176-.374 1.306.696 8.201-.037 3.269-.439 1.853-3.962 1.853-2.453 1.861-5.163 1.073-2.431 4.757-.059 1.058v.007l.579.146 2.387 1.562-.264 1.167.535.62 2.614.497.623.342 1.289 1.11.483.218.959.197.484.358.175.35.286.985.227.423.813.664.593-.116 1.143-.993-.044-.109-.059-.073-.066-.037h-.095l1.655-.204 1.582.562 3.039 1.678h.952l1.611-1.029.608.365.249 1.146-.103.97.183.781 1.084.584-1.12 1.298.014 1.701.711 1.918.966 1.985.41 1.832.257.474.542.379 1.267.11.578.182.535.431.805.948.513.314.6-.051.638-.277.637-.11.615.453.168.496.278 2.167.191.605.483 1.095.176.569.593 2.685.117 1.299-.175 1.051 4.057.372 1.179.722-.359 1.058.044.89.197.854.11.927-.175 2.065.234.7.798.153 1.033-.08 1.581-.919.894-.212.381.131.813.591.388.197.424.03 1.026-.205 1.267-.503.292-.504.103-.78.293-1.219.117-.029.505-.007.176-.139.103-.416-.081-.299-.132-.19-.073-.073.659-2.036.557-.89.593-.569.674-.328.783-.168 1.26.015.425-.073.578-.234.308-.263 3.551-3.91.154-.314.235-.102.227.094v-.007l-.213-.729-.959-.65-.52-1.138.344-1.314.696-1.408.139-1.656-2.768-.489-1.531-.693-1.325-1.24-.623-1.941-.827-1.518-2.087-.817-1.223-2.189-.088-2.116-.879-1.102-1.084-.117-.827-1.072.468-2.124.908-1.86.901-1.321 9.703-10.879-1.904-2.641-2.175-2.167 1.289-1 2.732.387 1.779-2.532 1.135-2.284 1.099-1.634 2.27 1.306 1.047-.008 1.04-.233 3.625-2.817 2.248-.35 2.292.183 1.297-.205 5.17-3.239-.103-1.146z"
        ></path>
        <path
          id="mazowieckie"
          stroke="#F9F9F9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.25"
          d="M367.893 176.613l-.666.211-.681-.423.124-.306.205-.701.205-.357-1.149-1.394-.747-.438-.872.46-.38-1.511-.945-.919-1.201-.379-3.193.437-6.371-1.313-2.161.117-.995-.248-.484-.781-.703.299-.827-.635-.689-.985-.293-.715.249-2.211-.11-.321-.571-.095-.344-.306-.198-.569-.146-.854.037-.598.183-.525.139-.555-.103-.657-.285-.394-.908-.773-.85-1.175-2.285-2.437.125-1.459-.132-2.51-.491-2.379-.256-3.51-.637-3.166-2.373.671-2.307 1.153-1.281-.89-1.025-1.445.651-3.721-1.984-1.496-2.043 2.204-3.105.459-2.915-1.517-1.084-1.971-.564-2.48-.6-1.686-.996-1.029-1.567-.861-1.04-1.86-.169-1.722.659-1.226-1.874-1.452-2.256-.328-2.168-1.182-1.508-2.904-2.278-5.721-1.025-7.836-.659-2.693-.937-2.218-.542-2.371-4.951.38-1.01.546-1.172 2.313-1.67 1.182-1.86.285-3.632-.343-3.105 3.692-3.684 1.175-3.91-.015-3.003 1.729-2.599.54-2.93-.036-1.479 1.204-1.355 1.612-5.726 3.306-1.494.445-1.575-.168-1.267.985-.695 2.298-1.062 1.241-1.238.62-3.076.569-12.925-1.992-.359-.43-.263-.599-.638-.437-.703-.154-1.625.504-1.055 2.094-1.186.985-1.414.357-1.962 1.584-2.095.985.242 1.284.037 1.335.329 2-.117 1.335-.22 1.321-.388 1.152-.783-.094-.755-.54-.791-.329-.871.832-.762 1.16-1.713 1.438-1.999-.263.637 2.773-.205 2.488-.821.904-.344 1.365.454 1.408.681 1.277 1.179 2.838.037 2.226-1.758.474-2.753 8.004-1.084 2.219-.22 2.568.843.861.168 1.24-3.024 4.984-.169 1.124-.271 1.138 3.947 2.714 4.306.912 2.102.985 3.786 3.05 8.502-1.758 1.304-1.328 1.523-.139 1.113 1.416.989 1.714 1.281.664 1.45.431 1.128.781.52 1.7.139 2.334.835 1.847.586.313.63-.153 2.819 1.131 1.597 1.073.563.715-.424 3.32-1.362.795.336 1.408 1.099 1.255.974 1.459-.103 1.248.359 1.073 1.472.474 4.343-.496 2.717 1.248 2.966 2.298 2.409 3.218.264 1.087-.367.751-.41.606-.212.839.381 1.875 2.204 2.299.622 1.671-.102 1.568-.527 1.08-2.974-.416-2.453-1.32h-3.193l-1.062 3.692 1.216 2.918.403 2.022.154 2.086.307 1.058 1.509.723.534.598-.007 2.101-.681 1.803-2.629 2.444-.52 1.78.139 1.919 2.263.81 1.216 3.072 6.737 4.13.952 1.087.864 1.379 1.055.796 4.95 1.028 5.69-.912 1.355-.766 1.201-1.678 1.282-1.211 1.237.423.344 2.189 1.223 1.379.176 1.08.264.985 2.797 1.817 3.149.27 6.774 2.116 13.094-2.715-1.003-2.502-.323-2.08-.38-1.167-.088-.511.066-.744.153-.569.345-.949.739-4.05.498-1.043.388-.328.447-.066-.073-1.364.498-1.978.249-1.875-1.633-1.948.08-1.591.96-.773.988-1.379.044-2.678-1.259-.124v-.453l.622-.729-.139-.81-.74-1.146-.088-.926.037-.745-.147-.583-.637-.431-.388-.036-1.01.445-.718.073-2.109-.445-1.135-.526-.608-.715-.513-.875-.058-.679.425-1.678 1.479-.394 1.464.598 2.981.467 2.9-1.029 1.018-.963.278-1.496-2.065-3.166 1.582-2.218 2.255-1.365-1.435-2.189-.996-2.451-.168-1.752-.806-1.729-.659-1.853-.256-1.671 2.907-2.16 3.112-.897 5.925.036 5.602-1.109 2.08.387 1.435-.46 3.911-2.926 1.567-.182 4.504.43 2.27-1.853.197-.992.264-.84.674-.722.747-.496 1.677.387 4.796 2.466 1.59-.598 1.354-1.73 1.172-2.729 3.889-5.735 1.31-2.459-.615.424z"
        ></path>
        <path
          id="warminsko_mazurskie"
          d="M357.231 32.688l-1.04 1.92-.769.627-2.819.927-7.697-.402-9.542-.51-11.388-.606-11.387-.598-17.737-.949-14.646-.773-11.82-.628-11.819-.627-15.855-.847-8.451-.452-.161.087-.454-.043.073.313.11.76.073.32-.644.132-.322.693-.22.766-.351.365-.594.087-.549.227-2.651 1.948-1.611.226-.674.277-3.185 2.014-.52.124-.52.336-1.04.97-1.033 1.686-.263.262-.278.416-.725 1.905-.55.54.03-1.022.161-.846.293-.628.388-.365v-.518l-.96.124-3.647-.474-.988 1.13-.286 2.38.901 2.677.842 1.489.432 1.744-.468 1.277-.638 1.123-1.786 1.81-.652.97.11 1.365.739 2.984 1.37 2.255 1.977 1.167 2.102.277 1.069 1.452-.798 2.73 1.457.707 4.05-.328 2.05.554-.161 1.124v1.16l-.498.912-.747.759-.644 1.97-.491.759-.08 1.116-2.315 1.022-3.302-.22-1.714 1.08-1.45 1.577-6.042 11.236 3.545 6.896 1.01 2.947 1.245 2.343.637.919.96.409.776.036 3.134 1.036 4.38 2.627 4.672 1.226 2.277 1.598 2.117 5.341.608 6.216 1.413-.357 1.186-.985 1.055-2.094 1.626-.504.703.154.637.437.263.599.359.43 12.925 1.992 3.076-.569 1.238-.62 1.062-1.241.695-2.298 1.267-.985 1.575.168 1.494-.445 5.726-3.306 1.355-1.612 1.479-1.204 2.93.036 2.599-.54 3.003-1.729 3.911.015 3.683-1.175 3.105-3.692 3.632.343 1.86-.285 1.67-1.182 1.172-2.313 1.01-.547 4.951-.38 2.973-1.306 5.859.344 2.57-.913 1.201-.948 1.296-.547 3.054-.46 7.067-4.838 3.976-4.494 11.402-7.07 2.351-2.482 1.428-4.027 1.663-3.174.146-3.233-4.343-6.07-2.079-2.036-.432-1.926-.227-2.072-4.131-5.524 3.845-5.465 9.132-1.284 2.717-1.839 2.336-2.444 1.032-3.386-.102-.533z"
        ></path>
        <path
          id="pomorskie"
          stroke="#F9F9F9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.25"
          d="M232.261 29.77l-3.185-.168-2.029-.7-.871-.708-.696.306-2.519 2.627-1.296.598-1.612.372-3.383 1.642-15.356 2.291-1.121-.343-.483-.262-.352-.358-1.274.708-1.523-.117-6.906-2.233-.688-.963-.249-.605-.586-.387-.681-.212-.549-.058-.645-.219-1.245-.956-.644-.211-.571-1.175-.271-2.627-.03-2.78.161-1.612-.322-.679-1.032-3.203-.513-.788-.33-.934.242-1.168-.681.876-.776.16-.469-.583.249-1.38-.476-.495-.015-.467.162-.467.022-.54-.601-1.3-.491-.867-.219-.263-.982-.438-.219-.263V7.793l.08-.467.579-2.021.263-.358.498-.226.352.16 1.325 1.03.389.546 2.402 1.16 2.445 1.679 1.158.401.395.664.359.153 1.435.292.381.183 1.948 3.298.674.86.498 1.321.747.526.249.51.205.511.175.24.725-.35-.044-.955-.417-1.095-.41-.773-2.549-3.305-13.979-8.355-.865-.197-.542-.285-1.486-1.298-.93-.343h-6.73L155.61 2.306l-6.95 2.378-15.481 2.934-12.347 5.778-3.918 4.305-1.552.555-1.736.3-3.046 1.21.08.154 2.849 5.735 3.369 4.874 1.266 2.583.293 3.349-.432 1.875-1.083 1.116-.301 1.24.454 1.015.769 1.073.161 1.736-.651 1-5.705 1.408 2.6 7.917.322 3.83.014 3.81 1.743 1.261.982 1.175 1.552 3.13 1.15 1.03.945 1.356.776 1.642-2.27-.299-2.051.963.044 1.357.82.394.711 1.175.454 1.46-1.216 2.152-1.714 1.751.718 7.464 1.97 2.423 1.692 2.984 2.394 1.46 8.334.342 2.19 1.197 1.816 2.182 1.15-.7 1.23-4.313.996-2.174 1.142-1.576 1.509-.161 5.683 1.481 2.548-1.029.022-1.452.161-.985.234-.89 1.311-1.226 2.812-1.043 1.663-3.057 1.106-.861 5.199 1.014 6.935-1.036 1.435.124 1.209 1.547 1.34 1.277 7.367 1.225 3.486 2.073 1.523-1.007 2.358-.84 3.339.475.806.452.556.664.66.43 2.694 2.78 1.267.81 2.234.884 4.665-.278 2.211-.978 6.042-11.236 1.45-1.576 1.714-1.08 3.302.219 2.314-1.022.081-1.116.491-.759.644-1.97.747-.759.498-.912v-1.16l.161-1.124-2.05-.554-4.05.328-1.457-.708.798-2.729-1.069-1.452-2.102-.277-1.977-1.167-1.37-2.255-.739-2.984-.11-1.365.652-.97 1.786-1.81.637-1.123.469-1.277-.432-1.744-.842-1.489-.901-2.677.286-2.38.988-1.13 3.647.474.96-.124v.518l-.388.365-.293.628-.161.846-.03 1.022.549-.54.725-1.905.279-.416.263-.262 1.033-1.686 1.04-.97.52-.336.52-.124 3.185-2.014.674-.277 1.611-.226 2.651-1.948.549-.227.594-.087.351-.365.22-.766.322-.693.644-.132-.073-.32-.11-.76-.073-.313.454.043.161-.087z"
        ></path>
        <path
          id="podlaskie"
          stroke="#F9F9F9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.25"
          d="M402.62 143.99l-.337-8.187-.11-.518-.161-.336-.147-.408-.036-.723.117-.532.454-.912.117-.424-.014-.539-.345-1.883-.007-.438.095-.81-.066-.525-.468-1-1.238-1.59-.351-1.153.051-1.321.395-.941.498-.817.366-.978.096-1.649-.432-.817-.703-.547-.733-.803-.483-1.051-.322-.992-.403-.963-.732-.985-.725-1.941-1.633-6.458-.828-2.159-1.926-4.014-3.471-10.674-.981-4.794-.088-4.232h-.008v-.007l-.996-1.46-.432-1.415-.373-3.67-.418-1.744-.541-1.59-.425-1.694-.052-2.028.169-.409.029-.38-.117-.342-.242-.314-.439-.357-.33-.504-.175-.627.029-.745.198-.306.219-.277.498-.409.608-1.065-.014-1.569-.594-3.24-.314-1.488-.447-1.554-.571-1.394-.681-1-.374-.226-.879-.24-.424-.285-.374-.54-.747-1.423-.395-.613-.755-.65-.82-.692-3.295-1.248-1.56-.956-2.541-2.13-.747-.358-.82.182-.982.416H367l-.74-1.029.008-.736.234-.796.154-.664-.264-.386-1.406-.168-.454-.314-.264-.445-.175-.547-.235-.548-.439-.437-.417-.103-.931.197-.446-.058-2.454-1.262-.871-.124-1.018.481-.051.102.102.533-1.032 3.386-2.336 2.444-2.717 1.839-9.132 1.284-3.845 5.465 4.13 5.523.227 2.073.433 1.926 2.079 2.036 4.343 6.07-.147 3.233-1.662 3.174-1.428 4.027-2.351 2.481-11.402 7.07-3.976 4.495-7.067 4.838-3.054.46-1.296.547-1.201.948-2.57.912-5.859-.343-2.973 1.307.542 2.371.937 2.218.659 2.693 1.025 7.836 2.278 5.721 1.509 2.904 2.167 1.182 2.256.328 1.874 1.452-.659 1.226.169 1.722 1.04 1.86 1.567.861.996 1.029.6 1.686.564 2.48 1.084 1.971 2.915 1.517 3.105-.459 2.043-2.204 1.984 1.496-.651 3.721 1.025 1.445 1.281.89 2.307-1.153 2.373-.671.637 3.166.256 3.51.491 2.379.132 2.51-.125 1.459 2.285 2.437.85 1.175.908.773.285.394.103.657-.139.555-.183.525-.037.598.146.854.198.569.344.306.572.095.109.321-.249 2.211.293.715.689.985.827.635.703-.299.484.781.995.248 2.161-.117 6.371 1.313 3.193-.437 1.201.379.945.919.38 1.511.872-.46.747.438 1.15 1.393-.206.358-.205.7-.124.307.681.423.666-.211.616-.424.556-.24.747.182 1.289.773.732-.007.322-.226-.3-.255-.124-.03 1.896-3.881.755-1.168 1.64-2.014 4.98-7.661 3.61-2.999 3.625-2.116 6.84-1.948 5.441-3.699 1.626-2.007.564-2.882-.088-2.021z"
        ></path>
        <path
          id="podkarpackie"
          stroke="#F9F9F9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.25"
          d="M391.884 304.419l-4.101-2.394-1.325-1.984-2.578-1.649-3.01-.336-2.336.226-1.084.467-3.369 3.816-2.651 2.138-3.09.657-9.198-.299-5.602-1.591-.403-.934 1.392-.35.644-.372-1.098-.752-5.705 1.124-1.435-.664-1.062-1.634-.301-1.591.689-1.328 1.01-1.343 1.282-.43 1.274.16 1.121-.649-.469-1.561-.974-1.81-.095-.883.036-.875-.373-.592-6.444-3.458-9.543-2.423-.754-1.313 1.86-3.51.571-1.634-1.31-1.146-1.45-.904-1.568-.599-1.611.073-2.709 1.897-3.061-.153-5.412-3.677.132.875.051 2.386-.337 2.54-.293 1.021-.483 1.153-.623.948-.732.394-1.076.176-.703.503-1.172 1.956-1.941 2.305-.293 1.007-.212 1.233-.513 1-1.259 1.51-.747.635-2.629.679-3.911 1.751.161.299.396 1.014-.777.817-1.047.613-1.04.227-.769-.343-2.511 2.181-.14.051-.461 5.378-1.245 3.013-1.53 2.634-.249 3.576 1.098 9.602-.329 2.809-.037 2.444.366.737.33.861.871 1.044 1.172.095 1.523.817.549 1.809-4.064 3.145-.703 1.562 1.208 1.109 4.401 1.882 2.461 2.656 1.421 4.393.139 2.232-.227 2.189.754 4.575 1.465 4.167.051.182.007.022.623-.255 2.929-.329.762.197.417.277.762.745.417.284.308.044.629-.139.411.117.688.708 1.377 2.116.63.511.424-.285.579-.693.71-.642.82-.153.755.423 1.501 1.386 2.204 1.102 1.472 1.386 1.179 1.897.513 2.211.271 1.985 1.164.846 2.893.555 1.333.854.476.211.41.029.981-.124.337.066.446.503.008.438-.117.401.095.394.307.263 1.919.584 2.263-.088.871.343 2.073 2.087 1.501.46 3.2.138 1.421.694.864-.825.82.255 1.531 1.693 1.01.686.879.11.879-.088 1.479.109.923-.277.447.051.41.394.754 1.058.454.146.732.38.909.817.827.357.476-.992-.073-.204-.059-.132-.659-1.138-.183-.584.051-.846.374-1.219v-.532l-.498-.628-1.838-1.028-.755-.555-1.193-1.576-1.326-.934.154-.037.051-.029-.644-.452-.542.679-.19.131-.249-.336.219-.759.652-1.35.579-2.21.688-1.897.154-.913-.55-5.735-.183-.992-.227-.481-.886-.934-.534-.84-.117-.35-.147-.715-.256-2.663-.279-.919-.783-2.248 1.018-2.422 3.105-4.174.71-2.014.293-.54.454-.394.886-.175.447-.197.688-.693 2.52-4.568.402-.488.359-.234.725-.27.352-.357.19-.446.337-1.276.212-.526 1.714-1.758 4.438-6.501 1.625-1.795 1.502-1.175 1.23-1.905 9.352-10.142 1.852-1.43 2.227-1.715h.014l1.187-.955 3.222-3.503.571-.824.022-.088-.022-.014z"
        ></path>
        <path
          className="area"
          id="opolskie"
          stroke="#F9F9F9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.25"
          d="M185.723 266.418l1.413-4.976-3.076-2.481-.952-1.846-1.098-1.342-.484.277-.38.664-.535.474-2.893.073-9.154-2.349-1.201-.971-.922-1.649-4.672 2.795-4.848 1.773-2.607-.146-2.153-1.729-.227-1.591-.55-1.394-1.347-.693-1.421.073-1.355.832-1.428.35-1.406-.102-1.333.445-1.061 1.146-2.38 5.472-.432 1.583-.264 1.686-.659 1.963-1.296.868-1.948 2.517-1.465 3.386-3.405 5.049-2.944 5.589-.938 3.619-1.479 2.525-2.475.401-2.146 1.649-2.951 7.348-.176.759.608.364.945-.116 4.203 1.182.454.27.952.802.52.278.564.007 1.245-.255.483.145-.087.176.139.693.249.824.249.555.402.438 1.443.912.974.284 1.919-.058.842.357-.747.307.11.241.146.211.169.183.183.167-.051.832.08.803.286.657.542.415.446-1.167.908-.073.894.722.381 1.19.205.138.219.051.213-.051.212-.138 1.201-1.46 1.955-.175 3.655.642.952-.248.703-.569 1.208-1.678.234-.525.103-.438.271-.168.688.255.227.219.754 1.015.103.145.022.168-.029.19-.096.204-.439 1.197-.08.584.087.642.432.423.638 1.182-.381.963-.828.722-1.743 1.044-1.091.423-1.977.08-.447.227-.3.642.081.459 1.991 2.518.638.284.417-.073.344-.197.432-.102.542.139 1.113.554.571.124.022.059.008.065-.008.044-.022.051-.38.321-.132.35.132.365.38.38.455.547.278.7.227.781.322.759.461.642 2.651 2.634 1.494.314 1.487-.453 1.208-1.079.74-.19 1.64-.051 1.333-.394.212-.277-.073-.635-.285-.438-.352-.015-.329.103-.213-.088-.183-1.437.681.167v-.007l.059-1.058 2.431-4.757 5.163-1.073 2.453-1.86 3.962-1.854.439-1.853.037-3.269-.696-8.201.374-1.306.878-.175.901-.424.081-1.145-.454-1.131.542-1.452 1.193-.285 5.947.059-.462-2.306-1.31-1.408-1.326-1.015-1.084-1.473-.791-2.445.974-2.627.725-4.035 1.099-2.305 3.2-2.058.293-2.291-.549-1.197-.257-1.466.308-1 .513-.613z"
        ></path>
        <path
          className="area"
          id="lubuskie"
          stroke="#F9F9F9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.25"
          d="M92.352 207.273l-2.673-2.941-2.995 2.029-1.853-.606-1.764-1.204-.6-1.766.182-2.276.374-1.277-.066-1.328-.674-.423-.71.306-1.524-.029-1.45-1.452-.944-1.722-.733-2.065-2.255-1.204-1.12-1.16-.96-1.416-.322-2.094.03-2.247.468-1.956.088-1.006.212-.964 1.333-3.925-.088-4.108-.82-1.977-1.736-3.08.872-.612 1.098.007.008-2.014-.323-2.444-.498-2.343-1.45-3.962-.153-3.75.175-1.423.044-1.51.286-.628.622.073 3.874-1.226.791-.51.388-1.058-.879-3.32-1.252-1.168 3.977-5.107-.132-4.32.813-3.903.747-3.218-1.077-3.327-2.058-.453-2.226.307-2.145 1.7-3.677 4.691-2.065 1.511-8.436-.029-6.935 2.378-2.314.124.813 1.102 1.12.19-1.56 2.948-2.512 2.918-2.167.307-6.796-2.255-4.006 2.211-2.6 5.698-3.207 4.51-2.073.875-3.478.555-.9 1.342-.997 3.59.235.263 1.274 1.051-1.15 2.408-.315 1.554.762.7.19.715-.68 1.569-.99 1.569-2.116 1.875.227 2.649.974 2.918.857 1.941-.242 1.211.916 1.029 1.384.715 1.164.27 1.15.504.637 1.167-.015 1.365-.798 1.058v.408l.586.927-.154.948-.44 1.212-.248 1.722.41.955 2.658 1.992-.754.934-.308.569-.132.591-.08.606-.169.628-.886 1.605-.22.642-.146 4.042-.344 1.292-.63 1.196-.754 1.007-2.343 2.393-.542 1.139.124 1.401.674 1.028.74.511.563.759.162 1.737.424 1.678.923 1.08 1.984 1.656.535 1.131.395 1.671.074 1.729-.484 1.314-.798 1.262-.33 1.269.088.475.132.693.908.941 2.673.905.864.613v.007l.93.533 1.927.569.922.445.637.496.762.803.425.897-.352.817.154 1.722.769-.452 6.547-3.407 1.179-.022 2.41 2.079 1.193.095 2.072-3.561 1.362-1.627 2.996-1.043 5.756 3.174 2.892-.723 4.533-5.975 4.028-7.859.879-.649 1.435-.474 1.238-1.248.6-1.7.799-1.109 6.21 1.153 1.098 1.182.132 2.276 2.27 2.897 3.244-.723 2.49-2.181 2.007-3.24-1.275-4.91z"
        ></path>
        <path
          id="lubelskie"
          stroke="#F9F9F9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.25"
          d="M405.586 271.723l1.127-.146 1.084.606.835-.365 1.362-.015 1.238-.263.505-1.123-.527-.803-3.413-1.882-2.761-2.554-.615-1.014-.227-.854-.044-.584-.109-.532-.455-.686-.497-.343-.52-.212-.301-.263.169-.51v-.402l-.476-2.714-.359-.868-1.077-1.664-.6-1.291.154-.591.673-.358-.454-.788-1.948-1.985-2.079-1.313-.923-1.124-2.27-4.961-.696-.453-.791-.014-.644-.336-.264-1.386.22-.868.556-.964.733-.766.747-.292-.257-.89.052-.671.292-.452.477-.219-.337-.788-1.663-2.452-.066-.409.637-1.313-.578-.394-.74-.27-.644-.445-.271-.919-.081-.409-.161-.876-.556-.335-.652-.248-.505-1.022.278.022.278-.022-.893-1.547-.359-.912-.147-.941.22-1.773-.058-.642-.462-.504v-.488l.366-.052.249-.153.528-.649-.205-.285-.249-.459-.132-.424.161-.182.381-.175-.096-.416-.278-.46-.146-.343.234-1.517.161-.701.169-.474.695-.803.857-.525.784-.781.461-1.532-.754-1.022-.645-1.189.454-.547.169-1.438.498-.27-.022-.306-.029-.08h-.074l-.161-.066.264-.751.029-2.138.271-1.219.769-1.831.542-.847.637-.481-.469-1.131-.578-2.503-.337-.824-.044-.767-.161-.766-.498-.35-.388-.168-.249-.423-.205-.54-.271-.511-.769-.467-1.941.059-.798-.256-1.135-2.269.161-.233.117-.796-.154-.503-.688.664-.271-.314-.403-.336-.161-.299-.564.686-.388-.08-.366-.38-.513-.226-.593.226-.117-.109.3-.613v-.409l-.856-.094-2.542-.956-.542-.54-.629.248-2.944-.795-.923-.591.33-1.182-.132-.876-.447-.657-.308-.255-.322.226-.732.007-1.289-.773-.747-.182-.556.24-1.311 2.459-3.889 5.735-1.172 2.729-1.354 1.73-1.59.598-4.796-2.466-1.677-.387-.747.496-.674.722-.264.84-.197.992-2.27 1.853-4.504-.43-1.567.182-3.911 2.926-1.435.46-2.08-.387-5.602 1.109-5.925-.036-3.112.897-2.907 2.16.256 1.671.659 1.853.806 1.729.168 1.751.996 2.452 1.435 2.189-2.255 1.365-1.582 2.218 2.065 3.166-.278 1.496-1.018.963-2.9 1.029-2.981-.467-1.464-.598-1.479.394-.425 1.678.058.679.513.875.608.715 1.135.526 2.109.445.718-.073 1.01-.445.388.036.638.431.146.583-.037.745.088.926.74 1.146.139.81-.622.729v.453l1.259.124-.044 2.678-.988 1.379-.96.773-.08 1.591 1.633 1.948-.249 1.875-.498 1.977.073 1.365-.447.066-.388.328-.498 1.043-.739 4.05-.345.948-.153.57-.066.744.088.511.38 1.167.323 2.08 1.003 2.502.161.876-.168.379-.323.278-.359.167-.292.059v.445l.761.562.125 1.262-.301 2.802-.044.204-.109.124-.103.19-.051.401.095.372.183.168.191.117.095.226.073.606 1.04 3.954.205 1.387 5.412 3.677 3.061.153 2.709-1.897 1.611-.073 1.568.599 1.45.904 1.31 1.146-.571 1.634-1.86 3.51.754 1.313 9.542 2.423 6.445 3.458.373.591-.036.876.095.883.974 1.809.469 1.562-1.121.649-1.274-.16-1.282.43-1.01 1.343-.689 1.328.301 1.59 1.062 1.635 1.435.664 5.705-1.124 1.098.752-.644.372-1.392.35.403.934 5.602 1.591 9.198.299 3.09-.657 2.651-2.138 3.369-3.816 1.084-.467 2.336-.226 3.01.336 2.578 1.649 1.325 1.984 4.101 2.394.022.014.52-1.7.447-.941.556-.54.703-.365 1.414-.445 7.418-.095 2.153-.89.893-2.109.184-.693.073-.824-.066-1.241.117-.766 2.629-1.379.776-.825.513-.736.051-.146-.212-.176-.293-.853-.41-3.05.944-1.642-.007-.022-1.04-2.502-.322-1.35.249-1.467-1.098-.27-1.121-.7-.571-.985.534-1.131v-.402l-1.142-.138-.974-.453-.6-.817-.081-1.233.505-1.109.938-.715z"
        ></path>
        <path
          className="area"
          id="dolnoslaskie"
          stroke="#F9F9F9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.25"
          d="M147.62 241.457l1.157-2.744-1.479-1.189-1.56-.43-2.504.503-2.424-.562-.952-2.393-.22-2.831.542-1.394.996-.656.571-1.62.403-1.883-4.065-2.634-4.525-1.233-4.812-.022-1.706.35-1.552 3.517-8.459 1.489-4.716-1.678-2.233-2.467-3.969-2.21-1.773-3.131-.139-2.138-.717-1.656-4.621-2.51-1.663-.438-3.573.686-2.007 3.24-2.49 2.182-3.244.722-2.27-2.897-.132-2.276-1.099-1.182-6.21-1.153-.798 1.109-.6 1.7-1.238 1.248-1.435.474-.879.649-4.028 7.859-4.533 5.975-2.892.723-5.756-3.174-2.996 1.043-1.362 1.627-2.072 3.561-1.194-.095-2.41-2.079-1.178.022-6.547 3.407-.769.452.249 2.773v.059l.176 1.174.11.445.761 1.336.923 1.087.6 1.277-.212 1.889.147.205.168.182-.703 1.379-.55 1.737-.336 1.824-.044 1.642-.088.831-.27.438-.316.299-.22.446-.073.642-.007 1.247-.125.745-1.83 4.633-2.058 4.903-1.457 1.62-.579.956-.007 1.204.871.029 1.48-.416 4.679.343.08-.555-.05-2.247-.045-.182-.029-.248.044-.365.11-.219.402-.453.125-.328-.044-1.882-.622-.905-.667-.525-.168-.73.19-.226.205-.168.235-.11.234-.051.586-.43.19-.299.117-.533.777.708 2.072.459.352.643.483.474.571.284.461-.094.14-.657v-.007l.366-.847.527-.372.476.241.19.985.389.948 2.328.037 1.092.54.659 1.065-.044.62-.36.679-.285 1.189.125.92.38 1.138.484 1.072.432.701.82.657.74.328.622.511.49 1.211.015.627-.117.65-.036.613.263.532.513.161.066.022.454-.474.388-.694.38-.467 1.707-.146 3.288 1.153 4.9 1.715.468.306.542.832.3.292.432.139 3.398-.825 1.018.095.088.438.132.394 2.065 3.517.264.095 1.135-.037 2.424-.905.673.095.557.533.527 1.007.36.875.219.883-.088.766-.593.475-.08.211-.03.205.03.204.08.197 1.743-.321 2.533-2.459 1.729.182 1.296.985.622.292.689-.153.498-.627.293-.825.307-.642.527-.117 1.487.029 1.333.343 1.26.715 3.485 3.685.366 1.226-1.281.525.154.489v.212l-.11.175-.183.372-.059.328-.058.497.007.372.11-.037-.352.496-.842.832-.38.54-.704.153-1.31-.365-.645.212-.315.825-.615.525-.718.43-.63.526-.227.087-.373.241-.249.022.198.715.073.19-.813-.183-.322 1.015.38 1.145 1.334.234.527 1.649.19.372.527.423.3-.066.294-.255.476-.153h1.867l.388.116.286.599.029.591-.03.583.103.555.733.97 1.823.664.908.643.586.824 1.04 1.897.593.803.52.934 1.238 1.291.446 1.211.469 2.167.381.796.717.941 1.414 1.299 1.713.89 1.663-.124 1.259-1.715.916-.656.498-.708.439-.861.74-1.117.915-.78.813-.124.82.058.498-.124.462-.117.38-.343.681-.948.491-.336.366-.014.755.27.366-.03.102-.233-.007-.766.11-.175.6.007.249.168.191.386.432.65.498.19.263-.548-.08-.839-.535-.7-.058-1.554-.433-1.139-.746-.817-.996-.591-.762-.788-.403-1.233-.307-1.364-.469-1.168-1.311-1.934v-.89l1.113-.678.93.116 1.157.694.176-.759 2.951-7.348 2.146-1.649 2.475-.401 1.479-2.525.938-3.619 2.944-5.589 3.405-5.049 1.465-3.386 1.948-2.517 1.296-.868.659-1.963.264-1.686.432-1.583 2.38-5.472 1.061-1.146 1.333-.445 1.406.102 1.428-.35 1.355-.832-.534-3.24-.462-6.683z"
        ></path>
        <path
          className="area"
          id="lodzkie"
          stroke="#F9F9F9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.25"
          d="M269.104 216.554l-2.204-2.299-.381-1.875.212-.839.41-.606.367-.751-.264-1.087-2.409-3.218-2.966-2.298-2.717-1.248-4.343.496-1.472-.474-.359-1.073.103-1.248-.974-1.459-1.098-1.255-.337-1.408 1.362-.795.425-3.32-.564-.715-1.597-1.073-2.819-1.131-.63.153-.586-.313-.835-1.847-.139-2.334-.52-1.701-1.128-.78-1.45-.431-1.281-.664-.989-1.714-1.113-1.416-1.523.139-1.304 1.328-8.502 1.758-3.786-3.05-2.102-.985-4.306-.912-3.947-2.714-.798-.029-.784.138-.505.759-.381.759-1.545.46-5.053.102-.71.394-.3.627-.389.511.066 2.145.791 1.671.601.175.11.642-2.534 2.437-4.079 1.737-.425 1.861-.381 4.159-2.072 2.437-2.739.642-1.413-.161-1.297.11-.564 2.043-.285 2.254.461 2.328.769 2.13-.168 2.08-1.963 3.466-.469.503-5.924-.642-2.343 1.102-1.062 1.445-1.904 4.538-1.055 4.006-.198 4.356.403 3.59.066 3.488-1.142 3.108-1.941 1.394-2.233-1.095-2.044.613-.681 2.05-1.025 1.627-2.995.657-.659 1.452.11 2.109.769 1.809 2.343 2.094.417 1.781.257 3.035.922 1.649 1.201.971 9.154 2.349 2.893-.073.535-.474.38-.664.484-.277 1.098 1.342.952 1.846 3.076 2.481 2.05-1.007 5.786-.19 1.333-.627 1.296-.898 1.442.285 1.253 1.277 5.353 2.889 2.651.548 3.266-.015 1.413-1.226 2.754.511 2.46 2.262 3.823 6.078 1.384.416 4.101-.219 4.445 2.262.952-1.591 1.187-1.102 1.42-.948.696-1.941-.168-2.043.029-2.065.527-2.087 1.45-.263 5.405 3.955.93-1.102.322-2.116-.395-2.167-1.267-1.007-1.868-2.831 1.018-3.918 1.003-1.321 1.275-.467 4.525.635 1.319-.379 2.841-2.693 1.296-.634 1.362-.212 1.362-.627 1.502-3.707 1.171-.876-.139-1.919.52-1.78 2.629-2.444.681-1.803.007-2.101-.534-.598-1.509-.723-.307-1.058-.154-2.086-.403-2.022-1.215-2.918 1.061-3.692h3.193l2.454 1.32 2.973.416.527-1.08.103-1.568-.623-1.671z"
        ></path>
        <path
          className="area"
          id="malopolskie"
          stroke="#F9F9F9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.25"
          d="M304.138 361.981l-.051-.182-1.465-4.167-.754-4.575.227-2.189-.139-2.232-1.421-4.393-2.461-2.656-4.401-1.882-1.208-1.109.703-1.562 4.064-3.145-.549-1.809-1.523-.817-1.172-.095-.871-1.044-.33-.861-.366-.737.037-2.444.329-2.809-1.098-9.602.249-3.576 1.53-2.634 1.245-3.013.461-5.378-.585-.051-.162.131.022.278.044.314-.044.197-.461.335-.278-.014-.381-.321-.22.904-.483.438-.476.241-.22.336-.044.539-.153.124-.22.015-.293.219-.71 1.007v.102l-.725.153-.403-.35-.359-.474-.608-.241-.41.102-1.684.81-.388.321-.381.431-.454.386-.623.168-3.039.102-.417.161-.344.299-.403.533-.381.219-1.12.109-.557.365-.63-.416-.542.35-.556.584-.674.314-1.567-1.489-.271.394-.256 1.095-.865.868-.139.08-.366.022-.168.117-.139.314-.052.678-.117.336-.571.554-1.318.635-.506.788-.161.671-1.23 1.306-5.375-.145-3.01-1.803-.769-1.634-1.86-2.605-.703-1.488-.696-2.941-1.867-3.692-3.149-2.101-3.435-1.08-1.384-1.445-1.603-.861-3.86-.007.271 1.386.103 1.146-5.17 3.239-1.297.205-2.292-.183-2.248.35-3.625 2.817-1.04.233-1.047.008-2.27-1.306-1.099 1.634-1.135 2.284-1.779 2.532-2.732-.387-1.289 1 2.175 2.167 1.904 2.641-9.703 10.879-.901 1.321-.908 1.86-.468 2.124.827 1.072 1.084.117.879 1.102.088 2.116 1.223 2.189 2.087.817.827 1.518.623 1.941 1.325 1.24 1.531.693 2.768.489-.139 1.656-.696 1.409-.344 1.313.52 1.138.959.65.212.729v.008l.352.138.688 1.219.308.328.959.635.498 1.262.74 3.167.659 1.999.212.452.703.54.857.227 1.633.014-.19.402-.059.335.022.985-.088.737v.015l2.351.802.893.102.828-.087 1.369-.547.374.277.007.007.381 1.182.205 1.044.242 3.028-.066.255-.308.467-.029.263.146.211.557.416h.007l.066.146.008.022.314.328.015.015.073.27-.095.35-.242.139-.256.073-.183.153-1.552 2.525-.162.817.528.73 1.032.379 1.89.139.908-.336.571-.591.798-.825.747-.547 1.311-.146 1.135.591 2.109 1.985 1.362.664.798-.62.425-1.562.227-2.181.513-.613.278-.693.234-.745.784-1.751.234-.314.103.103.901.102.402-.372.887-1.066.622-.35 3.164-.277.205-.278.293-.868.205-.89.087-.576.154-.387.418-.321.483-.007 1.677.634 2.116-.08-.007-1.08.637-.146 3.464 1.766.893.219.967-.35.469-.438.652-.803.417-.241.381-.021.886.131 1.545-.248.637.109 3.64 4.342.644.474.916.139.703-.044.637.102.769.569.666.693.667.482.754.139.959-.343.886-.767 1.333-1.955.842-.817.645-.139.864-.007.754-.153.337-.57-.498-.948-.945-.577-.498-.569.828-.926.622-.299 1.663-.336.637.058.739.511.586.649.623.431.879-.146.703-.657 1.281-1.89.74-.51.564.131 2.292 1.226 3.991 1.124.674-.008 1.523-.328.6.175.747-.299-.007-.022z"
        ></path>
        <path
          id="kujawsko_pomorskie"
          stroke="#F9F9F9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.25"
          d="M231.836 122.304l-.607-6.216-2.117-5.341-2.277-1.598-4.672-1.226-4.38-2.627-3.134-1.036-.776-.036-.96-.409-.637-.919-1.245-2.342-1.01-2.948-3.545-6.895-2.211.977-4.665.278-2.234-.883-1.267-.81-2.694-2.78-.66-.43-.556-.665-.806-.452-3.339-.474-2.358.839-1.523 1.007-3.486-2.073-7.367-1.225-1.34-1.277-1.209-1.547-1.435-.124-6.935 1.036-5.199-1.014-1.106.86-1.663 3.058-2.812 1.043-1.311 1.226-.234.89-.161.985-.022 1.452-2.548 1.03-5.683-1.482-1.509.16-1.142 1.576-.996 2.175-1.23 4.312-1.15.7-1.135 2.518-2.944 3.874.469 2.043 3.478 2.715 1.97 4.436-3.742 3.152.359 2.875 1.267 2.437-.579 4.225-1.838 4.232 3.325 1.204 3.105 2.32 2.006 4.407-.879 4.772-.483.927-.659.233-.732-.044-.689.526-.278 1.736 1.472 1.416.644 1.583.821 1.306 1.662.321 1.64-.547.718-.657 1.274 1.073.359.905.176 1.116.322.401.461.27 2.607.883 2.849.153 3.083 1.671 4.189 3.831 1.465.759 1.508.102 1.384.562 1.187 1.474 1.325 1.247 4.145 1.095 1.399-.628 2.38-2.794.791.211.586.409.315 1.226.505 1.08.776 1.16.989.306.615-.364.395-.745.755-.321.783-.08 1.421.664 1.23 1.445 6.774 5.545 1.12 2.525 1.472-.117 4.292-1.81 1.45-.204 3.888 2.977.389-.511.3-.627.71-.394 5.053-.102 1.545-.46.381-.759.505-.759.784-.138.798.029.271-1.138.169-1.124 3.024-4.984-.168-1.24-.843-.861.22-2.568 1.084-2.219 2.753-8.004 1.758-.474-.037-2.226-1.179-2.838-.681-1.277-.454-1.408.344-1.365.821-.904.205-2.488-.637-2.773 1.999.263 1.713-1.438.762-1.16.872-.832.79.329.755.54.783.094.388-1.152.22-1.321.117-1.335-.329-2-.037-1.335-.242-1.284 2.095-.985 1.962-1.584z"
        ></path>
        <path
          className="area"
          id="wielkopolskie"
          stroke="#F9F9F9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.25"
          d="M204.331 181.107l-.601-.175-.791-1.671-.066-2.145-3.888-2.977-1.45.204-4.292 1.81-1.472.117-1.12-2.525-6.774-5.545-1.23-1.445-1.421-.664-.783.08-.755.321-.395.745-.615.364-.989-.306-.776-1.16-.505-1.08-.315-1.226-.586-.409-.791-.211-2.38 2.794-1.399.628-4.145-1.095-1.325-1.247-1.187-1.474-1.384-.562-1.508-.102-1.465-.759-4.189-3.831-3.083-1.671-2.849-.153-2.607-.883-.461-.27-.322-.401-.176-1.116-.359-.905-1.274-1.073-.718.657-1.64.547-1.662-.321-.821-1.306-.644-1.583-1.472-1.416.278-1.736.689-.526.732.044.659-.233.483-.927.879-4.772-2.006-4.407-3.105-2.32-3.325-1.204 1.838-4.232.579-4.225-1.267-2.437-.359-2.875 3.742-3.152-1.97-4.436-3.478-2.715-.469-2.043 2.944-3.874 1.135-2.517-1.816-2.182-2.19-1.197-8.334-.343-2.394-1.459-1.692-2.984-1.97-2.423-1.53-.489-1.56.044-1.465.65-1.076 1.875-.791 2.254-1.048 4.371-1.23.24-7.535-.196-.923 1.306.044 2.729.63 2.437 2.57 2.488 3.09.788 1.516.795 1.282 1.635.256 1.963-1.259 1.554-.96 1.707-1.186 1.124-3.017.934-5.925 3.458-3.317 5.195-3.947 3.729-2.512.978-2.556.35-2.504-1.496-2.263-.751-.813 3.903.132 4.32-3.977 5.107 1.252 1.168.88 3.32-.389 1.058-.79.51-3.875 1.226-.622-.073-.286.628-.044 1.51-.175 1.423.153 3.75 1.45 3.962.498 2.343.323 2.444-.008 2.014-1.098-.007-.872.612 1.736 3.08.82 1.977.088 4.108-1.333 3.925-.212.964-.088 1.006-.469 1.956-.03 2.247.323 2.094.96 1.416 1.12 1.16 2.255 1.204.733 2.065.944 1.722 1.45 1.452 1.524.029.71-.306.674.423.066 1.328-.374 1.277-.183 2.276.6 1.766 1.765 1.204 1.853.606 2.995-2.029 2.673 2.941 1.274 4.91 3.574-.686 1.663.438 4.621 2.51.717 1.656.139 2.138 1.773 3.131 3.969 2.21 2.233 2.467 4.716 1.678 8.459-1.489 1.552-3.517 1.706-.35 4.812.022 4.525 1.233 4.065 2.634-.403 1.883-.571 1.62-.996.656-.542 1.394.22 2.831.952 2.393 2.424.562 2.504-.503 1.56.43 1.479 1.189-1.157 2.744.462 6.683.534 3.24 1.421-.073 1.347.693.55 1.394.227 1.591 2.153 1.729 2.607.146 4.848-1.773 4.672-2.795-.257-3.035-.417-1.78-2.343-2.095-.769-1.809-.11-2.109.659-1.452 2.995-.657 1.025-1.627.681-2.05 2.043-.613 2.234 1.095 1.941-1.394 1.142-3.108-.066-3.488-.403-3.59.198-4.356 1.055-4.006 1.904-4.538 1.062-1.445 2.343-1.102 5.924.642.469-.503 1.963-3.466.168-2.08-.769-2.13-.461-2.328.285-2.254.564-2.043 1.297-.11 1.413.161 2.739-.642 2.072-2.437.381-4.159.425-1.861 4.079-1.737 2.534-2.437-.11-.642z"
        >
          {" "}
        </path>
      </g>
    </svg>
  )
}

const StyledMap = styled(Map)`
  /* .area:hover {
    fill: #ecad1b;
  } */
  @keyframes color {
    from {
      fill: #b6bac0;
    }
    10% {
      fill: #ecad1b;
    }
    25% {
      fill: #ecad1b;
    }
    50% {
      fill: #ecad1b;
    }
    to {
      fill: #ecad1b;
    }
  }
  #lubuskie {
    animation-name: color;
    animation-duration: 12s;
  }
  #dolnoslaskie {
    animation-name: color;
    animation-duration: 11s;
    animation-delay: 1s;
  }
  #wielkopolskie {
    animation-name: color;
    animation-duration: 10s;
    animation-delay: 2s;
  }
  #opolskie {
    animation-name: color;
    animation-duration: 9s;
    animation-delay: 3s;
  }
  #slaskie {
    animation-name: color;
    animation-duration: 8s;
    animation-delay: 4s;
  }
  #lodzkie {
    animation-name: color;
    animation-duration: 7s;
    animation-delay: 5s;
  }
  #swietokrzyskie {
    animation-name: color;
    animation-duration: 6s;
    animation-delay: 6s;
  }
  #malopolskie {
    animation-name: color;
    animation-duration: 5s;
    animation-delay: 7s;
  }
  #podkarpackie {
    animation-name: color;
    animation-duration: 4s;
    animation-delay: 8s;
  }
  #lubelskie {
    animation-name: color;
    animation-duration: 3s;
    animation-delay: 9s;
  }
  margin-right: 40px;
`

export default StyledMap
