import React from 'react';
import ReactDOM from 'react-dom/client';

function Florence(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/florence.svg`} alt="Florence" />
                <p>Florence</p>
                <div className="infos-card">
                    <p>Right-Hander</p>
                    <p>Counter Puncher</p>
                    <div className="nationality">
                        <img className="flag" src={`${process.env.PUBLIC_URL}/assets/australia.svg`} alt="Australia"/>
                        <p>Australia</p>
                    </div>
                </div>
            </div>
            <div className="table-container-scrollable">
            <div className="table-container">
            <table className="florence">
                <caption>Upgrade Table</caption>
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
                        <td>200</td>
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
                        <td>110K</td>
                        <td>250K</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className="table-container">
            <table className="florence">
                <caption>Skills Table</caption>
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
                        <td>5</td>
                        <td>7</td>
                        <td>9</td>
                        <td>11</td>
                        <td>12</td>
                        <td>14</td>
                        <td>16</td>
                        <td>18</td>
                        <td>20</td>
                        <td>21</td>
                        <td>23</td>
                        <td>25</td>
                        <td>27</td>
                    </tr>
                    <tr>
                        <td>Stamina</td>
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
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>Serve</td>
                        <td>1</td>
                        <td>2</td>
                        <td>2</td>
                        <td>3</td>
                        <td>3</td>
                        <td>4</td>
                        <td>4</td>
                        <td>5</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>7</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Volley</td>
                        <td>2</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>4</td>
                        <td>5</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>Forehand</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>7</td>
                        <td>9</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>13</td>
                        <td>13</td>
                        <td>13</td>
                    </tr>
                    <tr>
                        <td>Backhand</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total Power</th>
                        <th>21</th>
                        <th>27</th>
                        <th>33</th>
                        <th>39</th>
                        <th>43</th>
                        <th>50</th>
                        <th>56</th>
                        <th>62</th>
                        <th>68</th>
                        <th>72</th>
                        <th>81</th>
                        <th>86</th>
                        <th>91</th>
                    </tr>
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
                        <td>200</td>
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
                        <td>110K</td>
                        <td>250K</td>
                    </tr>
                </tfoot>
            </table>
            </div>
            </div>
        </div>
    );
}

export default Florence;
