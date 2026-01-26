import React from 'react';
import ReactDOM from 'react-dom/client';

function Mark(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/mark.svg`} alt="Mark" />
                <p>Mark</p>
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
            <table className="mark">
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
                        <td>60</td>
                        <td>100</td>
                        <td>150</td>
                        <td>300</td>
                        <td>450</td>
                        <td>750</td>
                    </tr>
                    <tr>
                        <td>Price Upgrade</td>
                        <td></td>
                        <td>52K</td>
                        <td>66K</td>
                        <td>86K</td>
                        <td>110K</td>
                        <td>140K</td>
                        <td>180K</td>
                        <td>210K</td>
                        <td>250K</td>
                        <td>280K</td>
                        <td>360K</td>
                        <td>440K</td>
                        <td>700K</td>
                        <td>2.5M</td>
                        <td>10M</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className="table-container">
            <table className="mark">
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
                        <th>14</th>
                        <th>15</th>
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
                        <td>20</td>
                        <td>22</td>
                        <td>23</td>
                    </tr>
                    <tr>
                        <td>Stamina</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>11</td>
                        <td>12</td>
                        <td>12</td>
                        <td>13</td>
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
                        <td>16</td>
                        <td>17</td>
                    </tr>
                    <tr>
                        <td>Volley</td>
                        <td>3</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>12</td>
                        <td>13</td>
                    </tr>
                    <tr>
                        <td>Forehand</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>15</td>
                        <td>16</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>22</td>
                        <td>23</td>
                        <td>25</td>
                        <td>26</td>
                    </tr>
                    <tr>
                        <td>Backhand</td>
                        <td>5</td>
                        <td>6</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total Power</th>
                        <th>25</th>
                        <th>31</th>
                        <th>37</th>
                        <th>44</th>
                        <th>50</th>
                        <th>55</th>
                        <th>63</th>
                        <th>68</th>
                        <th>77</th>
                        <th>82</th>
                        <th>89</th>
                        <th>95</th>
                        <th>102</th>
                        <th>108</th>
                        <th>114</th>
                    </tr>
                </tfoot>
            </table>
            </div>
            </div>
        </div>
    );
}

export default Mark;
