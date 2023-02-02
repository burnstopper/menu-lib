import React from "react"
import { Dropdown } from "react-bootstrap"
import "./Settings.css"

const Settings = () => {
    return (
        <Dropdown className="settings">
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                Настройки
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Ночной режим</Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                    Режим тестировщика
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Settings
