"use client";

import React, { useEffect, useState } from "react";
import Container from "./Container";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <header className="text-gray-100 bg-gradient-to-r from-blue-700 to-indigo-800 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <Link href="/" className="flex items-center text-white mb-4 md:mb-0">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAABIFBMVEX///8QUpcATpUATJQLUJYASpP6/P31+PsFgcwGfckGf8kHecQGfMby9voEhc8Id8EIdL/q8Pbc5vBzmcEKbrnj6/MAR5LL2eiRrMwLa7bY4+66zODF1OWvxNvn7fSUr85Wg7QWV5o7cKmjutWHpciAoMUlYaBnjrpJea44bKazxtybtdJdh7ZzmsEsZaIAQ5AAY7AAWaYAUJ8AVKLE2uyAuODX6vbq7fQAQpZTgbgyba4+dbJwmseyy+N9qNGlwd1NlMlbnM+jzupks+FOp92p1u/A4vXb8PoAlNutudWOn8V+k71uh7aWqMleea5RcakbZqxJh8CQtdg0f71moM+TweIyjctzrdg3lNBbp9kAc8WEv+Rst+NMqN6Zzu1UsuWjuxfxAAAgAElEQVR4nNV9CWPcttH28v6amrZJmgsaPMGbS4qSbFmND1m2c7VN2viU7SRN//+/+GbAY8k9JNlJ2rd437jSapeLB3MPBoPF4j80dJJWQjfikGr/qa/9o4e+apjU4xJkKS889b89pd9jaF4pjLA6aKwh//vQqDWHxaEpLDX/2xP7bUPzY0nexIXQxNL9HyaaSiJF3AGL86NU0P/2/D536HW1k1z9UGL/f1I/qqSR9pCrH6Jc0P89frTT/DJy9USrQv2/PdFPG8Z5KXfkki9FJwuN+78DTTPrcilyQDL8jyjuxCZygoISiXz7/5qs6YFJYZimbRh6Nwyb+lks9MIli1UWFu0OnpSltsqVDhorU5cG+vCEwDa7xwb/FbyqmWRR3OYw2jYuy6gbZcyA+Qb+E4vA8IiXtptEk/PQNEjGugUQRTGPo+EJZcWfmrdlk/r2f1q7ECCLAhOSuyGOQxaZ4zltTzKTlHkehWE514+y7Ghu6tq1PL4gS5NH9M+UFFaG/1FrpyWtvFtyYLCaun7LuaxVCwWmLJRO1E9XRGLKck4SQWaRZ225W5uSKFT/QRdFL/bDgmmzXGjqCt+Q240iKoqktBGwVi5UwGWMga+Y+/FSFpTSry43dSimLP1P6U0tuwSW0PFVUTNZWB6GYR4XWeYkK88jSVVTQrxVkmZZXZRMVpZpcRXJcKHC/wzNtPTKuQjiMnJylvlEIyvXs/Ukywy/RH1QHKThwvYIpU5+YB2EVwMTRJb8R5Ct2OX0EpUli5vMW5VF7RtOlbOUVgojoSTK0uHhUlnqIcvbqmKZa+pJfBUzArLK+w/gsuczAeU1m4MktkVdrKhtHFSiVFILTLVlxlLuJQzeba38RtTTQwVVidC6etpcTTJBjP54MVM3BCyP10ZKVoQyW1HNL9vcsmMJlpqmS0FqglJhPlBazAzikdTIyiZH7chc95Ct12jyYGX2LbKU/OHASDvH5Qc0zBVcVWWZZyuThI6Kur0yQJXLLUmWcunrpcQSNxdzN2NCWavUMH0E1lJnOXlWvhwkLrfSOSOUf3jEHc1wyaywqtRF3RanHiW1HSo5qYHNFKOGqTHPPZSchdpIQkhyWa4jwEkWZpOnlgjT1Rpp8qyVH3VZH7Bz9mwBZTn9g3ERJsyGKJZFcXBeKKLlgxUWPY+JCYU3Kd4KDJbokqXcJjSS5JS2slzVtQ+OZSNJpa8IcmH8OCGM1PjUL7hzLBdFPvseufpjSaZtugqtb67S0COrgjGxCj3DzxXLKMH4OghETgiSomKCmAXgZ4lx6GaZWYpinYBPUs8ZW5QzLfCsXJS3HQAl/EOBefnmF0aF0FrewoP4q7RpWoGr15oOQCg0cBBlh3ItAUALA70MmPDywKxEy2jgN+ILs+cpCS1DQtIdGSAx/iOdRtXa/sIly0hN/SVIjF4cLuNSWBIXKFQaIHkyguj5TOeeMEifY7ZSBm+RmeEoU3ZbtrQWxTbV7GwriJOFP9L/8DZtsyzHvmlJhw5aN7nwa6qDjqDwGyjEGqQoIlEvRWJUdR8GmevoLkfBRHeA8+wlBrDv8iDIwrxgG4b7DyVZNpcwiBEdc+GIyIUZoJBiahatUugLIBZbkSV68DGPz8Q+suH+PRM4B4J+rNYLJTN/saAMnGYC6yd7bqnMFbBc/2G4NmyYlFuUWKAHYbV9IBSoriA7lBo7IQlwUnuA6yxJgBEdqBii0TKOY3TwBUnirFZOOECWwwVxkyJKDQvgV76Z5TN+FGP7D8KlzSRMZo1np2xpGYWCPk8BvMicVZoYbh6lQBLQ2yKLi7T2XUJtXUMRUTXdpjD9MGsqxgm4fqBSuHGe2PrCRLiymC5INP27LP1RUubOCMYSk9rgTuXE5ZEjV3CsCZMiFyUB6RSDI2LruyejAsDVQQy0G8HJ7arClTBCeEmSZZcmdjgVavkPkjKtnG+axHls12CMGh0kapmaXOlJEFaC+Wqb1LuO32q4WZQPyA5rB1RHZoDmqQrBAh0bQSQ+QSZZfwjJ/I0UIfya2JUEAYmH2t3u3D5ZElmUkJ2otF3zMkhYdiGC1LixeEjBEEiAinhgDEEcc2FUjzL7I8IXr9qyYXK+ctPC8rQCFBg4uZjU2E6/aMbwkz3C/cvsHSpJQY0AP59HywidZylbqCqILiBzNT8ev1gsf39mNMsd4aUsNKnj26YHP+URKLHccgcYI3X00csjAx59S78F4JOJMmNSga4K/Ov6CVgyKdIdp2ajdhSL4PfG1ezJ5y6Z6xQoZbIi5tlkf9kYkP2FDC+5Ax4yEnH8YaERKwfxZAUqVEwseF6RK5HLmBPnow4Rrd835CTlnh0G0MEkFzL0E+J6Roe/DITSV8Ps/za89LeRrGT6EepUmKxDBXmeiy0BNdKmLUvKsB79EOX33FZTQagHnbyxkye3dibBi1KbbnzhmlAjnn8Mb/nbX7be1H0RtXjeWxZW6JSVVVpmhePlke0OCQkZ47nfCRZZ+21im5VzK+27wCZifjDSZ/iYvhp+/Ec/E/XvPTD9HwPF3FH+Bo1JC/Q3pDBD5i4ptTXaKE1A/YEbwY/LfheimWk1uuBiuyIbwCyIIYVmXeDwl1Hh/W3gzH+4PZ7v+wnZf+8xa+N7VHN4grYqwaNqHAmV4DmEsZXUEq9q4ni05NIG138WrDqWR+aTWnexyudJKphEW69VwIS5VqsBYe+96j/0wOj3vY4x/zHAMSdECNIc/BbkyNy3lsulVAeRIsVuNC6wLJT+b1GPKk1baa0NpdjzLT2Zhy4i25Dmvw3faP4wvPJ9N/2//LMHvfp7j2f1t/4t2mo2TxJ1VlmOqJ9lvp5h+iQk660NWZLi0PxcP8QM42mAq8Rukh862jR2AR0WGvNP0b/136f+s+eX1T+7V+wfe2B//0f/ju8HT4L44+f5e+1M7qLSxiX2wsX4TYltOklp4lZH/TlUU2nWShMnCmIuGqA6DvWJky+Wvfxoa19ikKTF33t6eFU3AXNI6P7Y/4H+2LOk7oxU13vx8ztFLEHAihlKzAabrt9O5UBU4vSTZc2o47lFFhtSR7UXKYxC3NvHwnIxajU6foX/j+GHH7p50x4QzftVEHrp+9vArN73A1epZDDxpOGKXy44I4JvZTd5trE7I2LO8pNwec1GnghMZs2U3KwPGVH7PIaYT/b8/zJqdzvqMZqso4P9Y6c9COsA2WIHUP9hWILvBz2zIGsjZWQgzTIjPrcnK6MAT9nd1F1bIn7p0MJcmn4WgiaxrYD0kZ0dNjbEzeiXigMB+rUYxWQQIb3tWM74MesmLXRvWTHS/97PyXs4kNtOJgRQE0DBsgojWBe9NuTHZDPtolTX3ovR0mnEzlJ3FbZRAjFl63kMbIoQ0Qx3x2e4JnLi/djNU/3hx+4v/+x40pO7DPw/8u6dCev0jvb9kOZVnZlXoaIfzHBbs9YyUVyCU1xSZ9O3k6+7y6QWEy7ElGdTHng6hpR5TWoCcbSY5/gV/M1rr9ezBiX1Y2+e/vYlR6j/0KVxPanmr//QAVcf9TLo5sOSJJN8DX+rV+FcWKLBnPKsFDFf5Gy6rbKQXgtZMnctAmsJsaRKS9SRcYSBEwitNERG9qjt1WxI1taPOpK53SaJ9n3He67CkxbBj//k/EYPOxha8bD/HGnWeWyzA+1V4FpVJISgMzIoqEfJCrZ2QWU2yuglYyMVxagjssSNPNtSEFFnAZRi9IXc0ZiQESxzusm1nCZqqnCuXSkOAiP5D3yBw/sdL3usl06tWW8WkTHCKcELiUA2JEtVSa4IiWY2m9woxVdn9jeTvWLhZWVWLVtXt0ZzDas3fsBOxhjEabof1e876dF+4Eym1vc4qZJ7GeJ0l1y5G/98ZHZwejO3CB+OT/XW8ktReaCuilwIP6tEz5xscxMUrOuVzEjnBAMscepX6BH6WtoLnzRLF3nO8NDgUS8jq3vdD+khJ4Z/7wkiqjtg9SHXFeT4YSdGx72EkJdrpe9MinLcTkXLLBcf2qaWCazdpBimXK4C5mwlzVua8J0dKdQSHr9IG1s6STpMo37ZmWKjfMShe1/yybv3SgMJeg/DX7X4kqNOv+T8ajS98tcfF8MCeU9mxUZe52+AIAhEQ4HYEfMyf3HF2K5PCNUgwywSKH4daAc+/kauSLcGrRGUDzs7lHaKIVgyXElyD7WJmt4rYMLa4y9xEuqjQ85u7nHD8ajOy+GxtNkIJftYDPS6nm1j4kO5amPQ3igOEqSGFr7GXRlZtIgFapdPSDXWXG1Gg9SvjjsmMu+9NPjsOU/SY+Zieci9AmAHx4eIgBzexzXQHt7rPuuyge7mw8nqd/njmu9F5Sut2IMLpnlFRRlpN0J/5oVKFOgmN268dqoHYZD1o8ijUbGxTuwffsmpaH2Jqtx8eR9+057cawCLe/9L5OTs3mN8g/flI64xzMePev62H04W3+5CEy0FYVAyI9tbFSLGG0HG5tjY2ZPFlOSCSxqiO5gEw5qbAY95vkY28pF7/Jgzo3/vMTJh8iUKm/343hMsVLqHjOrcv6ejFN5DPwtey/jUs3tOvzQPJxqXuIP7D4wkFRbbhwti+yu0hzv/rBTRSLH0aCk7Oi15Ymz9gGCdv9GyRz0y6x5nKcCCJPNe3gcCGw/vgRLRm3uoz4t7RxouALdi/vFLLk/n93tVbxSP1w9d+SO7o3cqX1LFI7MrfGF34/2uLzK6wjRtga7vPMlMn4y/2Y/7CZFHL92OBI8N5DCUK4AE9EN4AQrVIw0VCZIS/oDcuaCPjzteVp/cHx+pvZ5uiPmbzu/G+DRgcuRWUmskuM8g5i2sy3zzzWzOhzV1Xz7shMTpmNA7RpJp1r2XFKZ774gsjMf3HpsL+gipFzy6h8bcvXf/HCE0955wBtay++MeuvlkXrSSXV5d/GnAWAFOKCMmlgUxTNxs5mHpq9H/rI87N8t4ycVGfXwf1UJ4/7hG8t0/A2D3garuy3tgr9z790HE9Idcearn9zoR1dLjJ4OAkVcbG5hBtOESxdFEz13NimxKsIxwspmmG4Z1JYpV59FPkT180jtE+pP7nV19ffzyDIFySO7R/Vfw0r37rxcBB5Yc33u6WDy5fwykOjs6foIYHt1/onaffDyY/rPH9aaT5M1jTKlwZ9HVFd6iNwEmtyTDrSGJRZYVtd0uMeAKpoW69uM3vTm1H97j6w2yhPIGOh6maT+6D7yY3Dt+opuP7j8i6pNjMG3By+MjE954H1WH3b1/odXHg27Vnr48n0xK62zmzCmSpYpYPB/XGe/8CmBkou6VDGJBiVtm3DOWxaJjRJWeTdJD5PHjk+4n92Xn9p0fIQW0J0gy7eEx0Ob8+PihQR8dP/L0V8f3/IV/dPwIqHJ8jKr99fH91/xjj457KgVPj6Z8aJ70GjOeUCivBMfDffucl/Bcqe4nQQs4iW5gZhwpz4VVo6djvz5bC5v56mU/IZg/TlF9dcwZ7eXxS33x+v7xEw0gP6IEgdmPjo9dIBvwoP74+OicLwfqT3j7/aed1SIPj87WM7LPz0YFtV71nCycnIDBZglPysnxFak4OqaBIBTwhNLVfdxSblsgoLPmQP386dqfo6+OXvM1hQm/RDWJc6WgLI6BZO59wHQCGF3+D4F/PPsxIgeCgbdBXx1ztnMf3X/VPeTs8YQP9bOn60N0el/wJIrigZ8EZQF+EgsJr/gpr/A8zJHccuU2ktLiyjSOawliNSW26j5bJ7Zhck/sjnjHj87ReTo+fqYunh4fv7EpIDkHYh3VLgI7ByakoDSOqPEKybaAt6LiP3l8/JgLmPr65cs1vejTp1PZIVxdsKJU3EagvqVnisxaVAtieUUabg1MLGoGjkagkjDMYrZpwsDOvHJH7+rN/Vdc0E4eHaN9BiBgoOjREZDy1fHRK/rm+Pjp2cujl+6To+M35quj41fGOfz1BMh2xD/wuFOlC/Pp/TWu4Omr87luPMC8RKl5h66XF6pOPTxiwhOr1wYmK56jgIIPnahCDbJdCmm8vjUu58mr4zd8Pq9h4gDx6fHRY6oBpjcG/PjoBKA8f/3y6Ojs1dHRq5O7oOaNN/CTTt/AjyqS/OgpQjCfHY18qJ69enWy8Z24jwtclyxLu8iTNB7LXa8PTIr4vhhWzXPNIXA/YL5+Z29unff8CFO7+xrDyLdHx4/JIrgN0zbOkGRImddPjo7evL17dPQU4Dx5Cq+cnx/DP/ozQE2B4MdHz9FSn705vtNjUcnzu0+3Jqs6uAfvea1wbikiLHzb65PrA2OuSwy3GE6O9mGBEcyg0edHz076wB6Q4UQ4n5lAOYBjAow354+Pjp49Ozp69Oru0d1Xj46OCvzlHEj3mCLop0AmoCxB8XrERZR/0etHt85mIZbGS2FoK4ulTylxK37mwukD42sDExuzzS2i+43A8wJyF1Wo5snJ9Ov013duPbV7ZEdHb8HQAqMdPbMD+O3OCdDm7ntE9wZA3er+O3pzC/57Cj+8PQGYb0zjObwL+NiA12518qUC7mezMFonpx1vWKLipHGdRHxWYpJ0LuS1gcllJMpKblHDxdyXPOa3jJPXZ1NpO3kDROHfSbn8gJjdAWScDV+9OLoLoI7u3r1zdzbwxaO758+QJ4238COYPwq/dXKqnrw94nw9DNU8Ox/qESgTSKlg6RkWTyhFb3ilqwrYaQ+MRQKv1KpSqoUieI1rFrTfvX09gUaeHd95e9pjxKnpMK2jp8YrwIMiBVTaQAV/QOq9eYqwbaTd8wDUz1FPL/31m+M3U21IX79f+wNqwzADDzok9sEeVV7B/aor1X2/AEqddOUB8jJvYnBYZnxhv754ezI+SHt9++jWUyTaKXDcnacqYjp6ewZUuvPq7v7xCt5w6wzQ3X1jL97dBqSoN7RzoPDztck0zp49O5tO2mWdh9h6PgE7liTdr9UVnkfv3TPiFflS4fIpioJSzNdDJW/fPD8bDLR2BnN5ho7PCSeTfoJEev/87hYLzgb+7fnTu4gORPVux4cnb+8c3X49TtI8f3Xxbm5ngi7dJKYWqEcqN4Sf+BKv8u5rLotSZNo69Ytc4FvQYwJnPbST57dfvRsW9vQZTO+tichgws9Oz5EYzzZ5cHvw99x5d/oM3o/0Ml4DzV8NvqFG37958/p086sdrgfzVS4qjd1UZrGMC4Exd/N9s4HllAjMcfPIp7q9smKGrvMOOutnz+6+eXDaTcJ4fRum9k7nyGBqIGZ3b19Grp5o8Km7b8+QzoBLO7sA0XvaIwnOnt++9XQLFlCRl91WHrhSzLNNLVFqj51n2aX5t36vkvkHQKrSIGRho6Eodr7ZeHcDzG5nULXzGzDP5yegQYDH3jx4c+e64+IB/8TJ4vQtwLz9QO+f/ezO0fOTnZPlZXjM831LSY3aWbHMZV59uRec9ulj8OhlqbArIcYTC90ujW7bm58F1jm6c9Fp+9Pnd+7cvf3ePkVMty9uXxPXrYtbiO7EeHD77p07nQ+ln7y9cQSrtBlD6125ao3iIWWLRbhkTGFRXIb5qhAuS3Lrg3kWmoYdJlTiO9FDYbh2evLibB7PqSfv7x7dvuCCYL9HMBcvTi4Q2XWB4RvvXpycPcMPcLOhnz2/cffo2dnGKuonZydd6E5zXq7gr2Lc1BIzJ7IKv10nPHeMTnXip0zD9s2kczEla/iIap+8f/uOTut8VdAid+8AR2rg6n2BM33+7gKm+ynj4t1bJNuNFzp8w4MLeN7FuyksVbdfvH9wMmQkDCwx9FOhS3lI2SpNfTyVsb/81OyqfmXZS/NzYi5svlcGfsvkPdrp62cXD85OJ0Hni2fIUqj+T/CnO2+e3fokXDeeAffevvMM1MfJe1ybNw8msNTTswcfnr+bfOHCARQ5t9KyIseh6bkRFpY1e220M2zQmF6d5E5fjy6zjc0P++T5FxfPH6y/yn53A6E9e6cb7/lUPw3YLf72t7b24vkNAHj7/frJ6smD529uvj+Zs+WK8U0lUWRlTWxN8yLOWnu3ksb8lmKRhCmZF3XtAOLt3UJQWjd+uvH2rPdMF6cPvgBh+emLByfvLj4J1DAu3p08uIl0u/W+1/DA9ufPb/x08/nZFiECvnMSpa6umZ5T+tZS7iKQ3blFvVhXl3E696W4YrPr3QZwzU/wtQ+61VRPPvIJ3nz7/uIW0OCTxu1bF+/fv+Gff97FKurpi/ewdD9dvDvdxV/ofOSBRkIrhuAjavoEo5TtmqlaM2E95P4//HfPmRJVf/H8JkjIF89fnBoqQHt2A7nqxs0bn4jr1q0bb7qPfvgGmEM/PXlwceMWGIL3Wwq/HymeMGxaxs8sia0/HAcSdrkfZLv8vA8595eqggh86MT/wYtTAHrx5605b7+yd1y8MEB+3328yUn/8cX+TKHLD4Vy7SGjhz7sVu46yqkW+9r2cH9K1TRd32EoVOPF8y/+jNguQHOdPrj482eOGzcfnJ6++HjxBV+oiwc7WRC+r6v6GxIzrIbAU3CHc4h4IGbzA76yG5cgdyEcWOdvXrx4cXYCbKfOOeT0HWCDcfuniwcPPnzxWbi++AAf/ek2h3jx4NttPLp9evLtyWmnrYyBu5yFVzYZDcdkqLRpzOjm3vM4xGxtnk+/+fnrD8+fv3/34tvv9MmBDuPk402cEkzw4osbnzPgc/B5fMDXL6YmS9X0706/effg/cePv7w4Pe03vvWmC10iCpMKdM0fs/pSM7cMqjWvllsftt4KWYxvfv744eafbtz88PHnFycnp9/pnIDGrx9vfhak9YBnAjt3BNKAQCdn7x58/HABoJ+/n6FdqKg9BDFPotANm9xa77tslrLMzijKrMjWJdPCdp2SCk7jewD3009/vnnx7OP7n198e2po33374MPNL/702ePmxYNvvlP177795sW79x+ff7gAcwIvfnx3si1vCReqNJWwFlqJ/OmOw1R/6NPqDjlPNNUY6pUgTN0CxsHppy++gi//EwrIFzcvLoCAv/761cUXnzsuvvr1159/+frDxc2bX6CcAqYPwH27NBb4HshUkdufB8ijSU2LZE3e57OpUHE3eTjJ3W/27R4qsD/w5c0/ffGnL77oVv3mZ+KCT/7pz5xy8CzA9NW7b7/bXx/l5TJoxNGjmO66Tz3AGcEE6aDPTHbvu+pkpPHdtz9/DbOC8f9+8/jTn/58868fvvoVJPfSL+U5p2r3fru4zqht7Khzl6vuqXvl/ky3NN++eADobt78DaDg0xdf/wKEusb38d2uPbvtcjvyWDazYXiigybDHpsUdbUx0zG2kJoOEPqf/4XYPnd8+NfP34AV4QO+ZNNazoZ9WXuTsUeGvulMidiwZ/iZu8AqzPvbb379+edfvuLj41f//vjx49f/gv+bjg8ffguwD/wZ//r3R/iCX2A8+BnHu19xgG/wDYxvex7VJ4cmxE3KidHAsLvoOcIfEjm68d3ptxzdL18Bgr/+9a/AeJuC9SlA/h+ojNkH5sLGB/79r38FyP/+5edfX3wLuAyuJbVodKLycsvJZf2UN0+Vzum6laECZ8BAkN+8AIz//tfXHwBhB3A+cXBB0HG/ARpvc4B3effoWBYF9hKigTk0DgfAAOm+AjTfABregW12clUdgcWuYRYbFYxy/6bwEn7dAWxj6N8hJb8BI/TVvxDjTQhbbr98yY678+pVlTOY/8tbw+Rv3Tl6CX8pC8sqohhCD+HlHf5HwAJIOJSRMntH36SgqzEMNv3BS4H1Zc0ze7d72J7ree7Z2bv3z97cAUiypMhtZIUrYsKgnlO0Ckyfw7p7LFWN4xPTNnj/OppYpaDI7A64aP/++ddvr1Dza2B9k0NuZfXNyGQnMGx3IPHD8oz/ejkwcLvrmLEcqdPC4L3oDmp3nsmiSSSIL299cZuxxt9ogKwGroOd8F4Ctr/+9et//QK60dAuU4kc2JRiW9Wj/ZPr6csMuKRsCgtbBKCx2MuKqnF6CoL26ysxTn3ei9A2+Qh2cZHhR5hryLcTGDhsNyuZIjJgSozMLi6+/upn1IB70a1lrCSBaW1yW/8ud6I8lHRseKAFeGpxJzCwWah7URbSZbm/m7EarAtsg0iU89GhVg1j9ikNtwmE5VJZKrjrzW6B1v0A1Pt1t70egYE5jsqt6udhvSauybI2Pb/OLN46EV+XJqkc0BPfoZr49ZvT73rpTuTtw+SaYQCFHIuA51N5C4N0mc6EiTzzariZt3DjxlwQy/Enfo1u84aRxM9iSfgI/jBaFGDPf/3yK9qv6UJM7JgobdadC+0wkWl9HNhmQVQOl7nQGb7O2qnGt8P4bqp5aSv0LifB09s6IXSh1VGmkzYGxIa7ChY0b/lxrITJWJpEy2XrAloQNa9sgYaUbrKnSmOlMTCA+YZblL925AN9OTDnlh6cjrW+SyYuFXjNbZn5ZGgJI5b8FAfQ6jtjSz6MUujdF83K/cUibHNL07MyUTVz3MFQTS/BtEkt8CSS4XtDrlo1bKobUXuwUIk30yleO+4xqOgZdAYFeeXbrjY6vsT0CmOgRde2W4xrL4Bn8SLcDth+J1jLpDFvQD14H12tQOC03SbIkYV5vsvkC6V6K2DXRpJWAG88F+1IO6IKcB97dUkv6cs4OZ+irQ+LSE1Ak6wpLdrbBvmS8zCJsBu1asBnSFEk2sLNwqGtQir2wEwnK0DC1Lhcb9aZnhcs9LQZyi+DfHf2sx+TYnN5qxvHJA86IZnAsDpRUhzav6/dm1YkYh8gwEp7wEsqyJgHouYxpVUXto8niuwsZkLDFz9TuhDQZ3GRpcCc6Q+WDdxbZvqi5/KJRx8ql+Qz14WweJaNzYCJ8bSQYtpbjg+l0HpduXdz1y6HXQDdWmJ8A/wbAakXBjDk+tGmt/I5MEvp6napO8oY6pI0tnQ9a6xkzsBmq2T7jfSQlpJzh5BamLR6kpez5NM8vgGSsVFLoQkAACAASURBVERjPWX37GEYkTLSXMOATOdp1S5608FK6WCzp5MtlGlBsgqmvD/JqC00P80AmFFEWTj0kqjFfD/J+kaaMnMNYriVt+5vJW5sJq3PdMoSi63aUwefX9zddE3LlsWuFdVtHf4WFSYmUhgohNH+rIFpRFvYh0sFzBpJJrPXs6ishuYPdqns9b+HFnRyYzfSqm7JuFG0lXsyhrSHWLronwb1kNGSrZ1KLpGbXm1hQK3yaAbe6FStpWlWlNngJ7kgcHYU9WWNjdIVJOtJmdsLI03TRFUTBibc9PraM6B8MJah+cu9Jef60MlhlSxbzzosjKFR0XLruCbtT+tIpecmRaWMPRzlnZrPH/sC6lZbgcXVs7h1AK9VZLP360nRqR81UrqUn+4U66MdCxMkro4r0IbBhqXWouU+Bzzo9QXzwsOIlkplDlY33vZFw14cWSssWVH71tD+PN+RpqL5qFNUr3Yciia2O1ep6ShqwEphf/ZX6+arPVT64tvuJK5KydALSQVM6iKMq8IGLrOsrFuzFduX+qODR+F7QkHzZWR2OkLetak5BDUgWge6apvaUDO9Qy3Scve2KBgwQGE0aPzDwyXIsT16FEapDLQ3iE/BKV4q7sJLnbEXiE5QfVpx27ufWqbsaURVj1WUurty85L4/e/pLrEZKtOlTPessiqMrD9BuLU1ozXLoaJbNwl6feAcYW8mH3znZEEg7iELs65XGmiQvJdRO1b60js7YkoCJPZrc5Hk2NLN9cn6kIJNBzGjbI9iHGhQxqmxCLzA7pz9fd3hwt44UDdXRLAHPus6Z0cb71MdZdCpupVDlAkLH+d5YSzSKi59UITrvLRKrd7DMduh1MwM3dEOgPcGPxcSYyF4z4k3l+d0uVMxalV/OoK4UhwS6g8p7r2WCRdCrEyuIRUHVrvBtonthvYAT2pws9RVxkXCTGqwECA9O1inx0DyfYyFp2gza4XvWMLq6BgRdq+b8U73oD/OIVZGqogYw/WaY29rpxU/CtnSRoHIRSZJaOqpgrpn/th2WioCiuJ6/fZJvrzkgChado34oROAZ99WvdMBwX2xY7LJcJ7FDUF5jxnQ/c6fdoDaRnLdVsgLAspqlaIRUJzpm4xS/KwOjh4Esdd6o+mk6WAP9GjHl40dYh1DrXlvNf7bZe1b+TaZWBLqUSNYZaWgVC1uv0wLZZzLmnmp/DYG4rrYRdwMZpWhonjlWeXt4YqbgoBqqCdS5FMt8LCZobC5MbY5MKslt+ALrKxKVnKWG2DeZg6+m++OY/DYwirMmhg72vORt2XhjF3RFitpKi+aDeh9P/FXuAbG3qSUXiydzb+5Q6GGIuZFQnUtZcJVLZK5lOUZeB6HQhmSTKgjVPhrIhvV5rprug0hclqUFVsqksB4Lg4TJtjPfinGWd9o8VwZ18fw0iLOBWl5eHioyCyvyiILfbqzySRI3ObO46Dsc8v3rTxvagt7tFSXRDljhm55mBcrXSPwCH5Mohz+rqbLctQVWoBdO7OibHNxKbRlY6Vh7a+AAraJf3GsKM4Pl8zizmI9AAtWDVPg5byN45K3NMVm8SJrSyt0t1oy6VtWWh3PsWumodJmyROg0i4tM/lQyktymsRUTacUl3L/jGE1aia2VuqETnpQRGWLEwQfLMoSlxoauMEB8KOf1KET1onvEtumrtMwqUxsDSINH72LrIVA04EPgBDiAvA7C0JcHgSYl1ni2cbEbNDlhnnyu0YlohVYeWtRrSOgcoUA82Bl6QauVYltVvTBjNjrRVKJwD+Y+gMmAxaKoyJdEZ4zc+sMU/HAhVUMo2PGtgmJrpM0B74uZDFy/aKNUw/MlGq6odUAweISKY3L4K5qKwJ+lvMKwjLf682ZJ83r9VSrrz1cJaIoSjHhpy9l8YpWdzyZIEalkIOvY+r+4PJ3OgDMgRXWMBKYCGc5AgoDAKHCQFFJ4WUYBOng+nUatXmT6Ava8IQ5HjwMAwwyw6gF2HHZ39SCScyYZ/sJfAo0EFdAyNyZBS7CzDEdmgbIJtpYeWnZfHdzl6s+HV36R1IsajusLYK+/qPv3eJIcuGaNl6GQ8GaosIAQEC3LHXqpAb/ARg0riqgA9KS2obtOU3kUNJ03pm4wgxJUQIIlwJ20IwJLBKMc65/QJEmuCwUF6yJ4iqXl7AcUwPjDBfeUF4AqxR8t/yaJ/7k0jZ9I1Okuj9lK3cFtxQ361sUecyg5HFjhQmwkJ+kqCeQZlFhZWmaHRQNvlBmEOhrq6Ytyq6nc6svSBY5nq6avgNA8tEywKN8z/Ozkgk5UD5xSaBp4GKv6nLW8IWXLbfgzIoJmAJFUhKe2LnmiT/F0qvDNIiUuPMf+10NXuXNMlzi83MQCneFy4wUKpusXhHTmChsFWblO1ZjJTaNlqIce34rMpA+YEZ9FcEyxDD/FWda/pwK2BG0yqo+ANnDO4TQCjjOQStP8xhIJsm3nVxpPdU9KPyAe/bXPI0kRUEl5StXitQ+ZdDvJiGntkAWIEiE/aeR42rfGxAZFGUEXCJgTFjyBZoELyyxHzdPFGMjTx9C0DKPUp902X9V45vpqhaQJG0q5GzQu2kGbF3mXEvI8tpG8z1asSAqseQ2CVQ1SHstcC1gsrBKhGVLvWCoYhxSRqEiMKvm/gIBdc3nhiV/todpVryuifEbm7gyiTIeI5NYlHkIqDWyXNZFVdZUU3XbrQ+irj83XhoFuhHFC59T4XYbMDxYOIkfdV6b6BXrZtOYqlewKmr6hoLXPT+GvcgKx4A4a7iOQ+6ytjZozbyEOQA0nAZKP7BRztDAov+Afbdtu7fPFascz6Sl2CeswVyACDnawsbNPgkNRtnpRS62ogRTBfHyPPh09r31vWU1lTAtz9aH3EZE7EB3S2U59Ce69om/2MMsda6UYac+BpclA4qFGZogvtGEtdQyIA1XHuhAkyt5MEoe5jnAfXSzXIjxSG6fxawhvDvwEivuPoI7tt2wbfws8GLMRFBKKbi3Kg7di+VJAnDVT6akdVlmpjF277v+ib/YpBZb5ok2pK/ELpiFX0tM5aooG+BTdeYZOAjlA+84AU0lggWXqwJLxxd63ULINPg7KlolAfxH3PZTYSFcsBGZg14K6XxF0DlguiNQJRVYkayIMVAeZqf1eV0xNJfwLcCiQ53llcCGLL6cOzEeFFzoZp1P/SpQk4oYg5oHOeu8pwzNmQIOCV4cBFrDX4HXzvlQaVFvg/Fb9/WrMVEJahH8ZlD3+XIJHMwvU8vlnpc7YhughTBWwF26dUot6cgjCwk55P5h3zHg+if+eMF+5Wtmk5e0r6pVeFhmxyw9B14sGpQL3E9HObEcnwTGbENd0w2SFGjdhMmxE7uSWQT+SAsmDz1MTM7qWMRkBBQoVfJ7vFo0ZOhMU68GaPG4VTWeZXZ0vE9DjMmQmr+yGdC6O4RkmchGspTZPRW5Z+MzlvlAlBWQK0wz8OfPu6jStgODF5rM8h6aV8C3rqNgrIOUWQGQdq4wUgqoDXpR6faj8R65sfFDNgRi4O3RRpGWGR27B1dXuFTrjScpJQ0GLWIzpL958Tc/bdH7C/x+P040HFxr84GKrmkKGJYFQjLNTOKpEhHUfaAPFWeqqm0OAz22VYLOVuKAHqzncxMZkyJddw9qY9yLla/f5UjmmzOy1HrGQG+IjCgbLuDjLpK8fc2fJOEq8/8k/AWr49dOLK9EkEVJEXk8ym+aQEOG7kt3aSHGaSWsCrpmqeNAJN/32zD6SgEIEoiTV75p2PVIhisblUxby+AUpIiq9dCpEQ/Dl3jdBY9JmCxJeCAZ/+v+mYz177I8Ka1WMYpHL79fAfx/URruLRzWR+7/zP+Eb+ZKtT/JITPTMFUSK/G0DuLT2jeB0+qrdFLPMzkWw60MaoiAFzGAwkdfHUYfteDvXDni5Qli5RBe6ICbIjBtdKT54JRqu+slB48Fawr5ruoIWMLd1yHjrtSguS2qh0yZbtJ+CjBZgPjUr4brU5D1xKtarG0NjdQtzE2B8BECbk6M1nGJiZomsMdFGQZfmxVoJjAZSQ3GBL3GzEoWdrcmgqy4KWi0ylXdWVfwT6IY8811fbTMkN2lreZDV48gKXvJBFT5J3bR7hhD1S3gyTzml6ocoKZnWVBPKnKuZMVplyNQNeu2unjlNl4Zll9+3nj30NyMJ/9Y7HzmdRd4z4mYGgd4hIhib2ZZqaYlEZ/U5WhSToyt5xd1K1yr9+SuoQamB+7k57Y8J7gVK0dUS+XYh3ABxWN+Wd5VdszcedhKzFPN7M/VKcV1yro7NNxEGd2dut2wwdXgxuuTcNFuJ1YBdvHzQ/Ac0nnzrWu4VHokbcGSxdxXybDLK8vZ1cWSKtZYYlrN4SOsk/Pzc3As8XcwT2GCwUCw5xaerWEPxzakNlm48TJ2NS+ez/HKQtjF9u2xMgQ/mt8yZ2iMLF/Wb1hVefIawmgHg+ix1Lw3D11xO1bYpeAwnwO+/entYeiFtNZgjkZjhaV2Mi/I2VPbMBmz0yDdsyxDzzCicvo6EVncoxq1wHQTniqlI7tun03RBoJrWNuShCHPkF6Ca9oHUxQzwy5EpZwX3otbefCtEWzUlcmCo5mFAv6aQYerOOR8x7WWOqa7s/MhA9+zmZZtNcpOZgQHx5AkWZp4e++VT/ulHvilMfRC2GhbvVm2smskc5LJQurnS/BA6ip2B9WyWa6j29jOz+elpirmP9Ii7pvklptlIqpVbkPQPBDAmuy4s1sLewdBrvoN2mVJZhWWnKuuYYSCDfUhs1xhvhYKkhLbQ5MFsV0j0yCQShO+Ow7iYvJ7veOivztAiyAWMwyNdpfraJRqVrOTNqpJfODKzYuVnMH+yM5w06EYhxt3UUrXun+HbDZOFquVjoikyhwrk8T+LmM18IFU/R6JnvkLaqUQXq6vYykaXa2LvsaBWlVplZjJs1f+Dt5TKbhRq0m1sJ6uTak11uNsVvJd915Ut5rTTIxoxru31HqhSMO1C4KjLwIvdNyukIPWxkKrChV7cq3W/o1qRbrqCBlxY0tTm9gjlpjBV8RxFNcakEnb2I/XiJ/WQ/FAYK0h4PWwwq4hS9e+e8ebI5MZJu94y2qhTIv+PjDQln6djIGwj75WUXLXgiqjjlKz0lCdikLAUhoUlQ62VjfiwjR8rAeOQszyzclmeKApkZONYvS/Fbxy1NxVV7ruUH+NYVqzyx5l9DrzWquFxjYCf+D65XQT0axSRMcR6fnaqjhVoDqYe69Lw8cPaGW98HkFZ1OoLiuLwlBXmTNnTNtNHUqiQW8IhdVKUmtvX4stS3n6KX6anlTzi4tFlmh1LvpmFdGw+zJ+G/z6E02kLWiXP9TLtR8QtmtgCdZGaXGySLlizEotkT1N18K8KeKNjTvda8Zr8CTmYyO6Q59sXK4J0Ubpf2IgZTrT6/VA6QO9wDIb7WHB235gNznwteqBFdU6pwujU+5qVo3rn+T2CIzggQJTWAEw/BMozKxa4MY3gEraOUPpzliCqFhOe0A0YkVBMzfLQvUZd9KoJK3WV3SKUcYqpyqNGmwh+FYNdSB8hEePV7gRmJ6WdVmwRB7Vr89sFC8AFgdqU3qkUFxAYWKlVKJHFipOOXNNWs1IZjbyqH9LV7eWuUUMz5xlLqR489a9a0PL8uGyHZlfnhtJiVFWYVUkmJC3Ir772bNjgNTy+9sj1oXKrmAuEjQzPkQFtGjjDLSMUUa+X5ZB0KI2KZusjKPZtuU6OpbZyrbBH8LSB09da3xRap3Pg9UtXLq+cGeZ4SEHw0ev2FALBawaT/ewXnrT2AYbyN1Isva5VDDc3DtU+T+2raJ7ETgRFqESBVuQx85Cp4m1nqaZrQ8As4RGrDFJJcE3lWbv+8pyGf62m7pUmjJl2NAw08MvXdqKy1oDppCKCq9SAfmLuEODCr/3oIzkKsui8nJbijeiaAWqEnf9idUk+yRWdqaIsJI+sL28dPi2lqy0of3pKYrNQTM2VJfZdRF4uWRpdRuFmaRUdcHZgt/jY7dgedNPu1ywO/YQlWmTD5yIfThHPgTmCBoFENW8UEOKDLzPPXd+n7sZ1fFKM4satFAi28uVyEjyOBl2csUcOKM42BWlXGPYtZX1FdGmg11t+p42QhyLbRBKPDOJHSHYKihxq+S3U6sfRtZpI7kqKzEndiXlxMwtG+/fGewBqKhr5wy2Ru9XGWGFPk7X3BHUkmmvqiQoFQHAmFgHsUoFlv6OF05qpHduMG+bGI2kJHqjMH1Rs7HYW5Sq+rdd+A6mk58FExvjABgusl0rMbyHgRkJrVc3Br9y+rOyZNNB1/cRLmwrroe7luTWXglKpCdMSfXELdZ5YhCION2AZlCP76FhogMz8RBerzy6k10nCpgRTJZ5HpNES0uawPAoLRmtFTBqXZ9zcl23d3MYB7IU9ZPU3LxysRKiH64ZV5TkwPaJwlxzhMVvnBCiVaD25WNOZqU1Zm26nRX8V7cpT3dgqQE1x/hEDVYRW99PJ5WqI5W2pWAXMz3OQ5LkYF2yZX/SSI9Esfgs7gjQ7nftLxZB1t1dNty1JMZ1nGAI6wW5FGm87gflIu7COFEq05AXwVFjv4xrAXG7dIeObmFarq9+RPGSPJOVAXZ9FyM9W0pLSRISGktSgddYaCnv7/wZyPSm64OZ6UD0kvVVFmTM5VV2LSuZBjzvgUSD791Iy3TYDQaySbnlXYJqGKpu0POiwf30SdgFuk+WGj1lNnYjAa3oLOV25RJwssCo2amnO6zbB/pkZMGQ7hLLJGXV6MEPeQEw+7nYmisw0djPXIxNty1ov6Hf21UlLxLXvFz3a1gc0srSLB4Wi2TlVMLKblPNAm+jMcCO5Q5ZxRKvPVDr3vaAdvlEZOr66L6oLCdRnDmmvERZyvRCyj3KgEAp+LKBZs27NCDd4iZNiLGjZF3VdHqeNnEubd3tmxqUqFQoNSenYCVbj/DWRHjddbfNprq9v/WpWz+6tT6KKouzrO8kgQUs7uWNhvJdBb6cE51CWDjPRSBTKkuFYTFAsup2z9yu6DKXlooibr4d9KqlF8tloftgVGI8aqzzU+adahrK5EnZqU/5E7Lt/IK/iRjPD91ND+lKTZhnC8whhEa0tIwsqprE2XkbtigpgK/r/Cd1hSBb/SjghRKvHFnhdQpSbUQQlh62WWitk/Tr2gM63v5+/UvY1cm99CLbzPhO88rIGnoKq6YnqESYXOuU2M56Wfq38cZz/E5b/t8MTRmiKsXXxNbXdTuSCR5SlHPVkUHPS7iZOb55kju0h6tOROe63Di50EbczvfO0sSywMJgldhGvESdbEGEz6wx/zLOvU6iocyAb8NOQReLBu+6gfgAhNGyDC9fYYGDrFBfjs35FU+z6n/DkvqqmquviuNjcmO8tCuPHc6O9WOiytcSUUjMinl6JCyXbr8lKgHH8TvLiBaA05LYpklxG3pCUfRUjHTZFgexUmhmtDwEps4WJV4EjXFXNL9/an6wa9gVkq/nYtE1R+9O89vlPE+kHOZurJRAsMY2A5K2frdzKJdpDZocpo77GbJw4Pu+Yfi+m40VJ1hCwjyvoYamlznF4tXWrnMPb60vMPswZ9vN8vPhxlxpT0Ow+bTX/anEdvcNjvVWU7+cgeqMDi27iBJKdb7XCyYmoCaJxdIxMA+Jc2DEQ1YUl8qSZ7iKJGnERPPCuDASMbFB1THfZJFuhr49a2LZLcTmfIz+xtxrmDPtYM3Q+7ZljK2LA0FEwA/PC7M5lFrLRSsut+C0yjG4so6umuGSV3YIxOPclzlIyjwxXKKnhboCAx3aLfjuS6RKsyxc4m5f8LRjOyUo5E4tXWnOknWFwH7O3VJ7OOumbmMzAVJULW4XSJlaKLJSqgVb2VnTX6qIwJSG2NT2SinVCpYnbhyASgWPs2HExdsiqMsU1rIttph0AlkPu+ned1UlA1nfRXPJHYf2TlMFkhMaYeQEB/xauURnSHU9XbpkzOZyihHwPcEFy10Pr4htAQ/DvIajhAF8vVKvcnlzy4HPfacp7lspyO2lCsQcra8s7NCH45j5hGui4c1rQV/xyVyCSfFKzQDN4YAdgCng+S2RoCXB8i5ZFB3up3meVBopek75jmUTprWYc1p0Tt6ljfcmF5fJlxzyX6jn5VbHk+5TYl6Wnc5jK6LgKqtNTpPlBNgy00In8enCIry/at4+xDLxZWK2zMVN4n3t3PYdoeo7Rl62P7YaBAz820s8sMDx93YFlcUesoh1klIOyiM20xmwdGF6K4hAK99AItdJa4R4LaEZKXG8+6mIdr9PWPfmY6+YrWcrRZfktryU4JGuS24R5DOpCLUaX82UaLQgHSuCgQLng5W5pYGzy8AOgzMGnAakFve2HtnRlmccenfXjljt0eLawZgqjy9JJ6wcbjNcdgUysfRtzUwZAImmwMTKSMANLrQoJ3ZauHa5zBKeb7tklcR9HZj5sLvwTNzTFH41Ko5LXBQ9GS4Od8utOGo+JKGtcklWrHGvTmbUw2Ybeg3Bm5dL7cqkvNn3FbctilLh1pc5F/3O8u4DoOsNdWnrROQ4tHC9FYWl6+LkNtztyXF5k9todKFAO2ABZE0N0y9x47fC/mGjulg/avJQWVrmWbCww8v0eeeliLv4Fa9S6qezv81/4LizrmdO2WKdPe+PJY/uO54IneFbQ+Z31olyG1fdZu/0AnSIpNf+vwjxKQxRYG3UpSr1+hJkfYGLuCM2Gy+oxY7Ce4bhbDxbNQgWFvHKXazG6QbEx+W89HM9+95Sb2oJWVzmEcTYwxPqEJ+KJ9L8sYOcfhnNzLa7b2uLYdUxGSDtvSPEcLydPKpudeRUbXDy5d22btcQ5Tik80uyuurLze/fj6zT+dvHTycdMSFS3PnR4NMKKI1kjxXfJqMQ+dfKxevOfm2tW/2lLPOXtWnBm1zs2k/TLpXeXcMMhX1dy6ewFJZcd0fITPdbs06WxI0+3NMLRHFjd5s2l8ruvkGtKxQ5Jh+yT9iWpNneNVC5/pDnKl/duIwcQsyterXLnOK9Q/Mv91BkqXQ/aaPLC3drANW1Ot95fiSJKBsLK+cbqR/vMyq3+aDWDgM3fIvIPqnyBEeyywgbfjRUf8yK8jYJhn9fWlMOIftt9pXD399GP/p09tbSLQVC60qZJjvXUkbHS9Yn9kWe5BGMS4T26mFb0s76JyH9nO1PeyPwoFmFsxbXDuG6iCsda5jL9YXLoK1WPTtq4efusfUDzzRt1gky6zMXaypmwSpSuh3QaIzqlbG72ZC1lpWITMpeZJbW3SPcz+guMh96Uk7aSuN5nGj1OVvwONTRH7aTaKifVXx7rMNmg9x6fQ6LQQxqr/O8SqqueI0ovWam9XJoftTK/VkjoS3cz4W1QMFAZtR4f96RCHRdebUc6FB0BqDFJjXqWILFGyd6GVmo4W/bLx+GSpIMDwVHmf9bJBaGl2A9Y03Mkf26o45e1V3i1+fiDFQdstgb5WFnD9MtCxRV192dNv2coRlBEFxjn/OKoYZJlmCp7li72PfFJfwmpyGvw++FYoOuGY5ojVmf2tn17P/uCHr/Yby7hfVVnxqy43BpCR7Fyutx36kPd8delOpvkIbZ+MSzLNcaobKh4lW/kvpb4Awg36RS2GjEQRp/30GtYo/RUL0w9T+vjm3oHjC5lJxG/X3cNGfWRDuoqbKWsN9xqFluFTsXS/VZ3JTNZ+lJNexy99MwzHCYgkvosrlf6WMSUL76nMinTqFwNG/nQ83YCjTDK8LPqY/i5zZm3XPhqxK+rbfa+DZ+p/nvTjDwXve5m6SrBFb98HMK9fie1ubpD4rANjkA+7Zs9l9W8Wrt36imdWePGOlFP63Nox87Bp/IDL+JBddbefudxAftIW1ke3TLByHpIhc7tcZxcGBNfhn+QUNPs+63g/51+J8osna927LK2DqYvdw9+mDyynm//IHlLvSDmYfn4Dnfa625w7b60epNAULSGXTdd0IcxTJznDjvjvOlbeyEGYvgHyHClKqeOI7SwF8isT/x55StM4xMKbpXLcEKnaiFJ8ET64Zl/OWwEOGHCt+ftVmY5WUyNAgtUxUmM8VBY/nSztbrgXWxG6ScAsP6Jyxkc+UAD3d0OSo9yjTQAom6MNv+sJiqsmShLmq26I4oqVakDg2pDRAK/jkPllB1ygDzWoRkvIstvOzi+Vj4PviUUy/sctxoMSIAVsyAgRpn14vu7XhrJ2oOzCuxWUIrdsC6p0egbewqQTU1fgvPGAGwhbayitDOIlXVsRNrmmZyL1YEvgqAGYsE24lVkb3QV1YUxR0wFR3eSA0uBbaw8/x6NhdQbMreHJjmRk2SWD0wlWARUQzAghgwBT0wlRDcO6RRDuDyIrWelJFqhIad5mUTAbAAi4/CEVhO8D4KFQShtLKoBxbUjewsrgC2sHY0Bt411GTL3MyBoYbzFl4PzGyFtqpYBrPOm7BO+9IQvczl0sJWTPAjmhkSAys6oIDcwrSBFUOZVVXeAQvgidZBAcKpV7gP5uJd3AXQKi48FezB5cDIngTP1tiuwt4EtrAbewCmWYe1TctMpbFYRVHZMzyE5aVbOysnhx9rXAsBgAUF/FglhuACF8bE9AdgQdGmvpPpixJ97lUPbOFblK5KefTDdwJTP7/AekPGEt3LyQBsETjmQgMZA4NfBwZpexkzmnTRKY9FkBag0ytUHrRpCqFGYAs30dYy5jPQOXrhL2rcEhmBqUkUt011OcV+w5gBU9NlnluGN1UeOiqPBbYMtAdgC6PAyBuBLTTPSUyuFRemVWaBMVxP6g3APNz1x1MjerGaAMMO0LZ5hYz9XsAWgW819sI9BGBW3L+hHEz6GtjCjIC1wu4CFXU8SasF2sJQ+uDVYx6eAwwgkAKNaOJZFQpBwErgwIbvi2fAtN8RmJYVELdN9s3CUNNC0SU+cgAAAI1JREFUA9Pz/Qukb36rBtb60LN+QBf2KB90ff+A6vcGRU1AUwc1Conf9KELdVUdj4TRMUb0RldDt1JVTa9foXjlCAgyxeSkq5V0Z1LGl4ZNLCuP/NmLk959+57e/cFO+hN26mLj2ZOfbKrOJvK7j2BfYEip7TifeUBjV7Pr/0tDTa7RO+J/cqjk/wCw/w+YhvKnREabGQAAAABJRU5ErkJggg=="
            className="h-16 px-10"
            alt="Company Logo"
          />
          <span className="text-xl font-bold ml-2">
            Sophisticated Instrumentation Center
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base">
          <Link href="/" className="mr-5 hover:text-white">
            Home
          </Link>
          <Link href="/instruments" className="mr-5 hover:text-white">
            Instruments
          </Link>
          <Link href="/about" className="mr-5 hover:text-white">
            About SIC
          </Link>
          <Link href="/usageCharges" className="mr-5 hover:text-white">
            Usage Charges
          </Link>
        </nav>
        <div className="flex items-center">
          {/* Login/Register */}
          {!session && (
            <button
              onClick={handleSignIn}
              className="text-sm font-semibold px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 mr-4"
            >
              Login/Register
            </button>
          )}
          {/* Logout button */}
          {session && (
            <button
              onClick={handleSignOut}
              className="text-sm font-semibold px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
