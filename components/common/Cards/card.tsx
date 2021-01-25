import { ReactNode } from "react"
import classNames from "classnames"

type Props = {
  children: ReactNode
  cardTitle?: string,
  wrapperClassName?: string
}

export default ({children, cardTitle, wrapperClassName}: Props) => {

    return <div className={classNames("card", wrapperClassName)}>

        { cardTitle ?
          <div className="card-header">
              <h2 className='ff-bold fs-16'>{cardTitle}</h2>
          </div>
        : null }

        <div className="card-body">
            {children}
        </div>
    </div>
}