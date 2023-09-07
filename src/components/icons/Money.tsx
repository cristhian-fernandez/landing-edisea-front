import { IconProps } from './../../types'

const Money = (props: IconProps) => {
  return (
    <svg width="31" height="80" viewBox="0 0 150 190" fill="none">
      <path 
        fillRule="evenodd" clipRule="evenodd" d="M123.244 115.763L118.899 101.221C113.727 102.404 108.557 99.9196 105.999 94.6916C88.001 99.5506 64.809 96.0046 48.959 104.477C50.584 110.901 47.923 115.978 44.196 119.023L48.169 132.51C54.087 130.975 57.587 134.327 59.501 138.785C65.259 136.774 70.937 135.576 76.432 134.806C65.666 127.175 64.872 104.157 81.592 102.561C94.548 101.324 99.613 112.706 99.538 122.129C91.226 124.795 87.594 133.71 89.421 141.32C75.215 142.096 60.517 142.981 46.535 153.183L33.507 107.701C53.317 85.4876 73.625 97.1666 103.232 87.9296L101.937 83.3256C77.64 92.0486 45.852 79.8726 27.554 106.359L38.554 143.284L32.517 147.041L20.025 103.562C45.966 67.9626 80.826 87.8596 105.95 73.2656L109.8 85.5776C113.087 84.2476 116.485 82.6396 120.006 80.6826L133.195 126.604C128.874 131.003 124.3 134.01 119.537 136.096C116.392 129.633 117.666 119.056 123.244 115.763ZM85.512 147.222C97.656 147.222 97.96 166.336 86.355 166.336C72.589 166.336 73.602 147.222 85.512 147.222ZM104.469 126.754C118.062 126.754 118.404 148.151 105.411 148.151C90.002 148.152 91.136 126.754 104.469 126.754Z"
        fill={props?.fill || '#9492FF'}
      />
    </svg>
  )
}

export default Money