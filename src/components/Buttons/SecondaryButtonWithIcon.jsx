import React from 'react'

const SecondaryButtonWithIcon = () => {
  return (
    <button className='bg-secondary inline-flex items-center justify-center py-3 px-6 text-center text-base font-medium text-white hover:bg-opacity-90'>
      <span className='mr-[10px]'>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          className='fill-current'
        >
          <path
            d='M17.8125 16.6652H2.1875C1.69022 16.6652 1.21331 16.4677 0.861675 16.1161C0.510044 15.7644 0.3125 15.2875 0.3125 14.7902V5.20898C0.3125 4.7117 0.510044 4.23479 0.861675 3.88316C1.21331 3.53153 1.69022 3.33398 2.1875 3.33398H17.8125C18.3098 3.33398 18.7867 3.53153 19.1383 3.88316C19.49 4.23479 19.6875 4.7117 19.6875 5.20898V14.7902C19.6875 15.2875 19.49 15.7644 19.1383 16.1161C18.7867 16.4677 18.3098 16.6652 17.8125 16.6652ZM2.1875 4.58398C2.02174 4.58398 1.86277 4.64983 1.74556 4.76704C1.62835 4.88425 1.5625 5.04322 1.5625 5.20898V14.7902C1.5625 14.956 1.62835 15.115 1.74556 15.2322C1.86277 15.3494 2.02174 15.4152 2.1875 15.4152H17.8125C17.9783 15.4152 18.1372 15.3494 18.2544 15.2322C18.3717 15.115 18.4375 14.956 18.4375 14.7902V5.20898C18.4375 5.04322 18.3717 4.88425 18.2544 4.76704C18.1372 4.64983 17.9783 4.58398 17.8125 4.58398H2.1875Z'
            fill='white'
          ></path>
          <path
            d='M10.0016 10.643C9.63422 10.643 9.27406 10.5413 8.96093 10.3493L0.889055 5.44927C0.746501 5.36308 0.644027 5.22378 0.604175 5.06203C0.584443 4.98194 0.580678 4.89875 0.593097 4.8172C0.605516 4.73566 0.633875 4.65736 0.676555 4.58677C0.719234 4.51619 0.775399 4.4547 0.841842 4.40582C0.908284 4.35694 0.983704 4.32163 1.06379 4.30189C1.22554 4.26204 1.3965 4.28808 1.53905 4.37427L9.61093 9.28052C9.72906 9.35258 9.86475 9.3907 10.0031 9.3907C10.1415 9.3907 10.2772 9.35258 10.3953 9.28052L18.4641 4.37427C18.5342 4.33159 18.6121 4.30315 18.6933 4.29058C18.7745 4.278 18.8573 4.28154 18.9371 4.30098C19.0169 4.32042 19.0921 4.35539 19.1584 4.40389C19.2247 4.45239 19.2808 4.51347 19.3234 4.58365C19.3661 4.65382 19.3945 4.73172 19.4071 4.81288C19.4197 4.89405 19.4162 4.9769 19.3967 5.0567C19.3773 5.1365 19.3423 5.21169 19.2938 5.27797C19.2453 5.34426 19.1842 5.40034 19.1141 5.44302L11.0422 10.3493C10.7291 10.5413 10.3689 10.643 10.0016 10.643Z'
            fill='white'
          ></path>
        </svg>
      </span>
      Button With Icon
    </button>
  )
}

export default SecondaryButtonWithIcon