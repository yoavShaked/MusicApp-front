import React from 'react';
import { Nav, NavItem, NavLink, Col } from 'reactstrap';

export default class VerticalNavbar extends React.Component {

    renderNavProps() {
        return this.props.navBarProps.map(prop => {
            return (
            <NavItem>
                <NavLink href={`/${prop.prefix}/${prop.label}`} active>
                    {prop.label}
                </NavLink>
            </NavItem>
        )});
    }

    render() {
        return (
            <Col sm={6}>
                <Nav vertical color="dark">
                    {this.renderNavProps()}
                </Nav>
            </Col>
        );
    }
}