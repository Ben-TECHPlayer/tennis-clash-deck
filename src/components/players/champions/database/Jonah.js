import React from 'react';
import ReactDOM from 'react-dom/client';

function Jonah(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/jonah.svg`} alt="Jonah" />
                <p>Jonah</p>
                <div className="infos-card">
                    <p>Right-Hander</p>
                    <p>Aggressive Baseliner</p>
                    <div className="nationality">
                        <img className="flag" src={`${process.env.PUBLIC_URL}/assets/uk.svg`} alt="uk"/>
                        <p>Great Britain</p>
                    </div>
                </div>
            </div>
            <div className="table-container-scrollable">
            <div className="table-container">
                <table className="jonah">
                    <caption>Jonah's Upgrade Skills</caption>
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
                            <td>60</td>
                            <td>100</td>
                            <td>300</td>
                            <td>600</td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td>400</td>
                            <td>1.4K</td>
                            <td>3.2K</td>
                            <td>6K</td>
                            <td>11K</td>
                            <td>17.2K</td>
                            <td>26K</td>
                            <td>36K</td>
                            <td>52K</td>
                            <td>66K</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            <div className="table-container">
                <table className="jonah">
                    <caption>Jonah's Skills Table</caption>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Agility</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>Stamina</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>Serve</td>
                            <td>4</td>
                            <td>5</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Volley</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Forehand</td>
                            <td>5</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Backhand</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            <th>20</th>
                            <th>27</th>
                            <th>31</th>
                            <th>37</th>
                            <th>43</th>
                            <th>48</th>
                            <th>54</th>
                            <th>60</th>
                            <th>66</th>
                            <th>71</th>
                            <th>77</th>
                            <th>82</th>
                            <th>89</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            </div>
        </div>
    );
}

export default Jonah;