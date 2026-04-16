import React from 'react';
import ReactDOM from 'react-dom/client';

function Bublik(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/bublik.svg`} alt="Alexander Bublik" />
                <p>Alexander Bublik</p>
                <div className="infos-card">
                    <p>Right-Hander</p>
                    <p>All-Around</p>
                    <p>Unlocked in Tour 3 and above</p>
                    <div className="nationality">
                        <img className="flag" src={`${process.env.PUBLIC_URL}/assets/kazakhstan.svg`} alt="Japan"/>
                        <p>Kasakhstan</p>
                    </div>
                </div>
            </div>
            <div className="table-container-scrollable">
                <div className="table-container">
                    <table className="bublik">
                        <caption>Bublik's Upgrade Table</caption>
                        <thead>
                            <tr>
                                <th>Level</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                                <th>11</th>
                                <th>12</th>
                                <th>13</th>
                                <th>14</th>
                                <th>15</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Up Cards</td>
                                <td></td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>8</td>
                                <td>10</td>
                                <td>20</td>
                                <td>40</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Price Upgrade</td>
                                <td></td>
                                <td>6K</td>
                                <td>11K</td>
                                <td>36K</td>
                                <td>52K</td>
                                <td>140K</td>
                                <td>180K</td>
                                <td>440K</td>
                                <td>520K</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-container">
                    <table className="bublik">
                        <caption>Bublik's Skills Table</caption>
                        <thead>
                            <tr>
                                <th>Level</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                                <th>11</th>
                                <th>12</th>
                                <th>13</th>
                                <th>14</th>
                                <th>15</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Agility</td>
                                <td>4</td>
                                <td>6</td>
                                <td>7</td>
                                <td>9</td>
                                <td>11</td>
                                <td>12</td>
                                <td>14</td>
                                <td>15</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>Stamina</td>
                                <td>5</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                                <td>11</td>
                                <td>12</td>
                                <td>13</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Serve</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                                <td>11</td>
                                <td>12</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Volley</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>16</td>
                            </tr>
                            <tr>
                                <td>Forehand</td>
                                <td>7</td>
                                <td>8</td>
                                <td>10</td>
                                <td>11</td>
                                <td>13</td>
                                <td>14</td>
                                <td>15</td>
                                <td>17</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>Backhand</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                                <td>11</td>
                                <td>12</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>20</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total Power</th>
                                <th>29</th>
                                <th>37</th>
                                <th>44</th>
                                <th>51</th>
                                <th>59</th>
                                <th>65</th>
                                <th>72</th>
                                <th>79</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>130</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Bublik;