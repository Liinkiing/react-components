import React, {Component} from 'react'
import {Tabs, TabItem} from "../tabs/Tabs";


export default class TabsPage extends React.Component {

    render() {
        return (
            <div className="container">
                <h1>Tabs component</h1>
                <div className="columns centered">
                    <div className="column">
                        <Tabs>
                            <TabItem title="Music">
                                <h1>Je suis le contenu d'un paneau de tab de musique</h1>
                            </TabItem>
                            <TabItem title="Playlist">
                                <h1>Je suis le contenu d'un paneau de tab de playlist</h1>
                            </TabItem>
                            <TabItem title="Radio">
                                <h1>Je suis le contenu d'un paneau de tab de radio</h1>
                            </TabItem>
                            <TabItem title="Store">
                                <h1>Je suis le contenu d'un paneau de tab de store</h1>
                            </TabItem>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}