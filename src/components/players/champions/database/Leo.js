import React from 'react';
import ReactDOM from 'react-dom/client';

function Leo(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/leo.svg`} alt="Leo" />
                <p>Leo</p>
                <div className="infos-card">
                    <p>Left-Hander</p>
                    <p>Serve-Volley</p>
                    <div className="nationality">
                        <img className="flag" src={`${process.env.PUBLIC_URL}/assets/brazil.svg`} alt="Brazil"/>
                        <p>Brazil</p>
                    </div>
                </div>
            </div>
            <div className="table-container-scrollable">
            <div className="table-container">
            <table className="leo">
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
                        <td>150</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>Price Upgrade</td>
                        <td></td>
                        <td>6K</td>
                        <td>11K</td>
                        <td>17.2K</td>
                        <td>26K</td>
                        <td>36K</td>
                        <td>52K</td>
                        <td>66K</td>
                        <td>86K</td>
                        <td>110K</td>
                        <td>140K</td>
                        <td>180K</td>
                        <td>250K</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className="table-container">
            <table className="leo">
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
                        <td>3</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>9</td>
                        <td>10</td>
                        <td>12</td>
                        <td>13</td>
                        <td>15</td>
                        <td>16</td>
                        <td>18</td>
                        <td>19</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>Stamina</td>
                        <td>2</td>
                        <td>2</td>
                        <td>3</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>5</td>
                        <td>6</td>
                        <td>6</td>
                        <td>7</td>
                        <td>7</td>
                        <td>8</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Serve</td>
                        <td>5</td>
                        <td>6</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                    </tr>
                    <tr>
                        <td>Volley</td>
                        <td>5</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                    </tr>
                    <tr>
                        <td>Forehand</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>7</td>
                        <td>8</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                    </tr>
                    <tr>
                        <td>Backhand</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>5</td>
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
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total Power</th>
                        <th>22</th>
                        <th>29</th>
                        <th>36</th>
                        <th>40</th>
                        <th>47</th>
                        <th>53</th>
                        <th>58</th>
                        <th>66</th>
                        <th>72</th>
                        <th>77</th>
                        <th>83</th>
                        <th>89</th>
                        <th>95</th>
                    </tr>
                </tfoot>
            </table>
            </div>
            </div>
        </div>
    );
}

export default Leo;
