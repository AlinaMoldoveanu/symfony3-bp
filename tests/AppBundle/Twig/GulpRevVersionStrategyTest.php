<?php
/**
 * This file is part of symfony3-bp
 *
 * For the full copyright and license information, please view de LICENSE
 * file that is in the root of this project
 */
namespace Tests\AppBundle\Twig;

use AppBundle\Twig\GulpRevVersionStrategy;
use PHPUnit_Framework_TestCase;

class VersionStrategyTest extends PHPUnit_Framework_TestCase
{
    public function testGetVersion()
    {
        $strategy = new GulpRevVersionStrategy(__DIR__);

        $this->assertEquals('07fb3d8168', $strategy->getVersion('js/scripts.js'));
    }

    public function testGetApplyVersion()
    {
        $strategy = new GulpRevVersionStrategy(__DIR__);

        $this->assertEquals('js/scripts-07fb3d8168.js', $strategy->applyVersion('js/scripts.js'));
    }

    public function testPathsAreLoadedAfterFirstUse()
    {
        $strategy = new GulpRevVersionStrategy(__DIR__);

        $strategy->applyVersion('js/scripts.js');

        $this->assertAttributeNotEmpty('paths', $strategy);
    }
}
