import React from 'react'

class Footer extends React.Component {
    render = () => {
        return (
            <>
                <div style={{ color: 'white', backgroundColor: 'black', padding: '20px' }}>
                    &copy; {this.props.year}
                </div>
            </>
        )
    }
}

export default Footer