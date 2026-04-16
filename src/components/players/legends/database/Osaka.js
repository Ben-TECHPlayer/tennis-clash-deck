import React from 'react';
import ReactDOM from 'react-dom/client';

function Osaka(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/osaka.svg`} alt="Naomi Osaka" />
                <p>Naomi Osaka</p>
                <div className="infos-card">
                    <p>Right-Hander</p>
                    <p>Aggressive Baseliner</p>
                    <p>Unlocked in Tour 4 and above</p>
                    <div className="nationality">
                        <img className="flag" src={`${process.env.PUBLIC_URL}/assets/japan.svg`} alt="Japan"/>
                        <p>Japan</p>
                    </div>
                </div>
            </div>
            <div className="table-container-scrollable">
                <div className="table-container">
                    <table className="osaka">
                        <caption>Osaka's Upgrade Table</caption>
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
                    <table className="osaka">
                        <caption>Osaka's Skills Table</caption>
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
                                <td>10</td>
                                <td>12</td>
                                <td>14</td>
                                <td>15</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>23</td>
                                <td>25</td>
                                <td>26</td>
                            </tr>
                            <tr>
                                <td>Stamina</td>
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
                                <td>17</td>
                                <td>18</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>Serve</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                                <td>11</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>16</td>
                                <td>17</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>Volley</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>11</td>
                                <td>12</td>
                                <td>13</td>
                            </tr>
                            <tr>
                                <td>Forehand</td>
                                <td>7</td>
                                <td>9</td>
                                <td>10</td>
                                <td>12</td>
                                <td>13</td>
                                <td>15</td>
                                <td>16</td>
                                <td>18</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>25</td>
                                <td>27</td>
                                <td>28</td>
                            </tr>
                            <tr>
                                <td>Backhand</td>
                                <td>6</td>
                                <td>7</td>
                                <td>9</td>
                                <td>10</td>
                                <td>11</td>
                                <td>12</td>
                                <td>14</td>
                                <td>15</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>21</td>
                                <td>23</td>
                                <td>24</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total Power</th>
                                <th>28</th>
                                <th>35</th>
                                <th>42</th>
                                <th>50</th>
                                <th>55</th>
                                <th>63</th>
                                <th>71</th>
                                <th>78</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>113</th>
                                <th>122</th>
                                <th>128</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Osaka;